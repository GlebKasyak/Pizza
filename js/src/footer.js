let Footer = function(items) {
    this.items = items.map((el) => {
        return new Infographics(el)
    });
    this.$template = $('<div/>')
        .addClass('uk-container')
        .append($('<div/>')
            .addClass('uk-flex footer-top')
            .append(this.items))
        .append($('<div/>')
            .addClass('uk-container footer-bottom')
            .append($('<div/>')
                .addClass('footer-left')
                .append(new Image('footer-image', 'https://dominos.by/images/img-cc28e5.png'))
                .append(new Image('footer-image', 'https://dominos.by/images/img-aaa343.png'))
                .append(new Image('footer-image', 'https://dominos.by/images/img-4f54ad.png'))
            )
            .append($('<div/>')
                .addClass('footer-right')
                .append(new Paragraph('УНП: 192360857'))
                .append(new Paragraph('Дата регистрации интернет-магазина в Торговом реестре: 06 ноября 2015. Регистрационный номер 293000'))
                .append(new Paragraph('Юридический адрес: 220073, г. Минск, ул. Ольшевского, 24, 1 этаж, помещение № 18'))
            )
        );

    return this.$template;
};

let Infographics = function(el) {
    this.image = el.image;
    this.heading = el.heading;
    this.text = el.text;
    return $('<div/>')
        .addClass('uk-card uk-card-default uk-card-body uk-margin-right')
        .append(new Image('iinfographic-image', this.image))
        .append(new Heading(3, this.heading, 'uk-heading'))
        .append(new Paragraph(this.text, 'uk-text-success'))
};