let Card = function (title, image, description, price, id, className) {
    this.id = id;
    this.className = className;
    this.$title = new Heading(3 ,title, 'item-name uk-card-title');
    this.$image = new Image('item-image', image);
    this.$description = new Paragraph(description, 'item-description');
    this.$price = new Paragraph(price, 'item-price uk-text-warning');
    this.$cardButton = new Button('Заказать');
    this.$cardCounter = new CardCounter();
    this.$btnInf = new Button('', 'uk-button uk-button-default', 'inf', 'button', $('<span/>', {'uk-icon': 'info'}));
    this.$itemList = $('<div/>', {'class': 'product-info uk-container'});
    this.drinkInformation();
    this.isSectionPizza();
    this.$template = $('<li/>')
        .attr('id', this.id)
        .addClass(`uk-card uk-card-default catalog-item '${this.className}'`)
        .append($('<div/>')
            .addClass('uk-card-media-top')
            .append(this.$image)
        )
        .append($('<div/>')
            .addClass('uk-card-body')
            .append(this.$title)
            .append(this.$description)
            .append(this.$price)
            .append($('<div/>')
                .addClass('order-container')
                .append(this.$cardButton)
                .append(this.$cardCounter)
                .append(this.$btnInf)
                .append(this.$thinDough)
                .append(this.$thikDough)
                .append(this.$pizzaSize)
                .append(this.$itemList)
            ));

    this.initEvents();
    return this.$template
};


Card.prototype.drinkInformation = function() {
    if(this.className === 'cardDrink'){
        $(this.$btnInf).on('click', () => {
            let drinksTypes = drinksInformation[0];
                $(this.$itemList).css('display', 'block');
                $(this.$btnInf).css('display', 'none');
                (this.id === 'coca05') ? $(this.$itemList).append(new DrinkItem(drinksTypes.coca05)) :
                    (this.id === 'coca1') ? $(this.$itemList).append(new DrinkItem(drinksTypes.coca1)) :
                        (this.id === 'sprite') ? $(this.$itemList).append(new DrinkItem(drinksTypes.sprite)) :
                            (this.id === 'fanta') ? $(this.$itemList).append(new DrinkItem(drinksTypes.fanta)) :
                                (this.id === 'richOrange') ? $(this.$itemList).append(new DrinkItem(drinksTypes.richOrange)) :
                                    (this.id === 'richApple') ? $(this.$itemList).append(new DrinkItem(drinksTypes.richApple)) :
                                        (this.id === 'bonaqua') ? $(this.$itemList).append(new DrinkItem(drinksTypes.bonaqua)) :
                                            (this.id === 'fuzeTea') ? $(this.$itemList).append(new DrinkItem(drinksTypes.fuzeTea)) :
                                                 $(this.$itemList).append(new DrinkItem(drinksTypes.kvas));
        });
    }
};

let DrinkItem = function (el) {
    this.nutritionalValue = 'Пищевая ценность на 100г продукта:';
    this.fat = el.fat;
    this.squirrels = el.squirrels;
    this.carbohydrates = el.carbohydrates;
    this.energyValue = el.energyValue;
    this.$btnClose = new Button('','uk-button uk-button-default', 'close', 'button', $('<span/>', {'uk-icon': 'close'}));
    this.close();
    return $('<div/>')
        .append(this.$btnClose)
        .append(new Heading(4, this.nutritionalValue, '.uk-text-meta'))
        .append(new Paragraph(this.fat, '.uk-text-meta'))
        .append(new Paragraph(this.squirrels, '.uk-text-meta'))
        .append(new Paragraph(this.carbohydrates, '.uk-text-meta'))
        .append(new Paragraph(this.energyValue, '.uk-text-meta'));
};

DrinkItem.prototype.close = function() {
        $(this.$btnClose).on('click', (e) => {
            $(e.target).closest('.order-container').children('#inf').css('display', 'block');
            $($(e.target).closest('.product-info')).css('display', 'none');
            $(e.target).closest('.product-info').children().remove();
        });
};

Card.prototype.initEvents = function() {
    $(this.$cardButton).on('click', () => {
        window.cart.addItem({
            title: this.$title.text(),
            count: this.$cardCounter.find('input').val(),
            price: this.$price.text(),
            image: this.$image.attr('src')
        });
    });
};

let CardCounter = function (counterStyles) {
    this.counterStyles = counterStyles || 'counter-container';
    this.$counterInput = new Input(1, 1, 'uk-input uk-form-width-xsmall order-counter-input');
    this.$incr = new Button('+', 'uk-button uk-button-default order-counter-plus', 'incr');
    this.$decr = new Button('-', 'uk-button uk-button-default order-counter-minus', 'decr');
    this.$template = $('<div/>')
        .addClass(this.counterStyles)
        .append(this.$incr)
        .append(this.$counterInput)
        .append(this.$decr);

    this.initEvents();
    return this.$template;
};

CardCounter.prototype.isEmptyCounter = function () {
    return parseInt($(this.$counterInput).val()) === 1;
};

CardCounter.prototype.getCountValue = function () {
    return parseInt($(this.$counterInput).val());
};

CardCounter.prototype.setCountValue = function (val) {
    return $(this.$counterInput).val(val);
};

CardCounter.prototype.initEvents = function () {
    $(this.$incr).on('click', () => {
        this.setCountValue(this.getCountValue() + 1);
        $(this.$counterInput).css('color', this.randomColor())
    });

    $(this.$decr).on('click', () => {
        if (this.isEmptyCounter()) {
            this.setCountValue(1);
        } else {
            this.setCountValue(this.getCountValue() - 1);
        }
        $(this.$counterInput).css('color', this.randomColor())
    });

    $(this.$counterInput).on('change', () => {
        if (!$(this.$counterInput).val()) {
            this.setCountValue(1);
        }
        this.setCountValue(this.getCountValue());
    });

};

CardCounter.prototype.randomColor = function() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

Card.prototype.isSectionPizza = function() {
    if(this.className === 'cardPizza') {
        this.$thinDough = new Button('Тонкое тесто', 'uk-button uk-button-default', 'thin');
        this.$thikDough = new Button('Толстое тесто', 'uk-button uk-button-default uk-active','thick');
        this.$pizzaSize = new SetPizzaSize(size);
        this.choiceDough(dough);
        this.choiceSize();
    }
};

let SetPizzaSize = function (items) {
    this.items = items.map((el) => {
        return new ButtonSize(el)
    });
    this.$template = $('<ul/>')
        .attr('uk-tab', '')
        .addClass('uk-tab')
        .append(this.items);

    return this.$template;
};

let ButtonSize = function (el) {
    this.text = el.text;
    this.href = el.href;
    this.value = el.value;
    this.wrapper = el.wrapper;
    this.className = el.className;
    this.$itemTemplate = $('<a/>')
        .attr('href',this.href)
        .text(this.text)
        .addClass(this.className)
        .attr({
            'id': 'link',
            'value': this.value
        });

    return $(`<${this.wrapper}/>`)
        .append(this.$itemTemplate)
};

Card.prototype.choiceSize = function() {
    this.firstPrice = $(this.$price).text();
    $(this.$pizzaSize).on('click', (e) => {
        let linkClass =  $(e.target).attr('class');
            if(linkClass === 'min') {
                this.$image.css('transform', 'scale(0.85)');
                $(this.$price).text(this.firstPrice)
            }
            else if(linkClass === 'middle' && ($(e.target).parent().hasClass('uk-active')) === false) {
                this.$image.css('transform', 'scale(1.1)');
                $(this.$price).text(parseInt(this.firstPrice) + 10.9 + 'p')
            }
            else if(linkClass === 'big' && ($(e.target).parent().hasClass('uk-active')) === false) {
                this.$image.css('transform', 'scale(1.30)');
                $(this.$price).text(parseInt(this.firstPrice) + 16.9 + 'p')
            }
        $(this.$thinDough).removeClass('uk-active');
        $(this.$thikDough).addClass('uk-active');
    });
};

Card.prototype.choiceDough = function(dough) {
    let ratio = 2;
    $(this.$thinDough).on('click', () => {
        if(!($(this.$thinDough).hasClass('uk-active'))) {
            $(this.$price).text(parseFloat($(this.$price).text()) + ratio + 'p');
        }
        $(this.$thinDough).addClass('uk-active');
        $(this.$thikDough).removeClass('uk-active');
        (this.id === 'pizza-texas') ? $(this.$image[0]).attr('src', dough.thin.pizzaTexas) :
            (this.id === 'pizza-hawaiian') ? $(this.$image[0]).attr('src', dough.thin.pizzaHawaiian) :
                (this.id === 'pizza-pepperoni') ? $(this.$image[0]).attr('src', dough.thin.pizzaPepperoni) :
                    (this.id === 'pizza-margarita') ? $(this.$image[0]).attr('src', dough.thin.pizzaMargarita):
                        (this.id === 'pizza-ham') ? $(this.$image[0]).attr('src', dough.thin.pizzaHam) :
                            (this.id === 'pizza-cheese') ? $(this.$image[0]).attr('src', dough.thin.pizzaCheese) :
                                (this.id === 'pizza-cake') ? $(this.$image[0]).attr('src', dough.thin.pizzaCake) :
                                    (this.id === 'pizza-cheese-chicken') ? $(this.$image[0]).attr('src', dough.thin.pizzaCheeseChicken) :
                                        $(this.$image[0]).attr('src', dough.thin.pizzaFourCheeses);
    });
    $(this.$thikDough).on('click', () => {
        if((!($(this.$thikDough).hasClass('uk-active')))) {
            $(this.$price).text(parseFloat($(this.$price).text()) - ratio + 'p')
        }
        $(this.$thikDough).addClass('uk-active');
        $(this.$thinDough).removeClass('uk-active');
        (this.id === 'pizza-texas') ? $(this.$image[0]).attr('src', dough.thick.pizzaTexas) :
            (this.id === 'pizza-hawaiian') ? $(this.$image[0]).attr('src', dough.thick.pizzaHawaiian) :
                (this.id === 'pizza-pepperoni') ? $(this.$image[0]).attr('src', dough.thick.pizzaPepperoni) :
                    (this.id ==='pizza-margarita') ? $(this.$image[0]).attr('src', dough.thick.pizzaMargarita):
                        (this.id === 'pizza-ham') ? $(this.$image[0]).attr('src', dough.thick.pizzaHam) :
                            (this.id === 'pizza-cheese') ? $(this.$image[0]).attr('src', dough.thick.pizzaCheese) :
                                (this.id === 'pizza-cake') ? $(this.$image[0]).attr('src', dough.thick.pizzaCake) :
                                    (this.id === 'pizza-cheese-chicken') ? $(this.$image[0]).attr('src', dough.thick.pizzaCheeseChicken) :
                                        $(this.$image[0]).attr('src', dough.thick.pizzaFourCheeses);
    });
};


