let OrderCard = function () {
    this.$template = $('<form/>')
        .attr({
            'id': 'order-form',
            'class': 'uk-margin'
        })
            .append($('<fieldset/>')
            .append($('<h2/>')
                .addClass('uk-heading')
                .text('Адрес доставки'))
            .append(new OrderInput('city', 'Город'))
            .append(new OrderInput('street', 'Улица'))
            .append(new OrderInput('numder-home', 'Номер дома'))
            .append(new OrderInput('flat', 'Квартира'))
            .append(new OrderInput('floor', 'Этаж'))
            .append(new OrderInput('the-entranse', 'Подъезд'))
            .append($('<h2/>')
                .addClass('uk-heading')
                .attr('id', 'personal-inf')
                .text('Информация'))
            .append(new OrderInput('phone', 'Телефон', 'uk-input uk-form-width')
                .attr('id', 'inf1'))
            .append(new OrderInput('email', 'Email', 'uk-input uk-form-width')
                .attr('id', 'inf2'))
            .append(new OrderInput('description', 'Ваш коммментарий', 'uk-textarea', $('<textarea/>', {'rows': 3})))
            .append($('<button/>')
                .attr('id', 'send-order')
                .text('Отправить заказ')
                .addClass('uk-button uk-button-default uk-width-1-1'))
        );

    return this.$template;
};

let OrderInput = function(id, placeholder, classInput, wrapper, type) {
    this.id = id;
    this.classInput = classInput || 'uk-input';
    this.placeholder = placeholder;
    this.type = type || 'text';
    this.wrapper = wrapper || $('<input/>');
    this.$template = $('<div/>')
        .addClass('uk-margin')
        .append($(this.wrapper)
            .attr({
                'id': this.id,
                'class': this.classInput,
                'type': this.type,
                'placeholder': this.placeholder
            }));

    return this.$template;
};

