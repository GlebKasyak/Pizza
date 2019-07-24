let Nav = function (items) {
    this.$items = items.map((el) => {
        return new NavItem(el)
    });
    this.$logo = new Image('logo', './img/logo.png', 'logo');
    this.$cart = new Cart('Корзина', 'modal-example', $('<div>', { 'class': 'cart-container' }));
    this.$template = $('<nav/>')
        .attr('uk-navbar', '')
        .addClass('uk-navbar-container ')
        .append(new ModalList('navList', 'uk-navbar-nav')
            .append(this.$logo)
            .append(this.$items))
        .append(this.$cart);
    this.findModalOpelBtn(this.$items);

    this.initEvents();
    return this.$template
};

Nav.prototype = {
    initEvents: function() {
        this.$openCardBtn.on('click', (e) => {
            e.preventDefault();
            if(!$(window.cart.$itemlist).children().length) {
                window.cart.items.forEach((el) => {
                    window.cart.$itemlist.append(new CartItem(el.title, el.count, el.price, el.image));
                });
            }
        });
    },
    findModalOpelBtn: function(arr) {
        arr.forEach((el) => {
            if($(el).find('a').attr('href').indexOf('modal') !== -1) {
                this.$openCardBtn = $(el).find('a');
            }
        });
    }
};

let NavItem = function (el) {
    this.text = el.text;
    this.address = el.address;
    this.$wrapper = el.wrapper || null;
    this.className = el.className || '';
    this.specAttr = el.specAttr;
    this.$itemTemplate = $('<a/>')
        .attr({
            'href': this.address,
            [this.specAttr] : ''
        })
        .text(this.text)
        .addClass(this.className);
    if (this.$wrapper) {
        return $(`<${this.$wrapper}/>`)
            .append(this.$itemTemplate)
    } else {
        return this.$itemTemplate;
    }
};





