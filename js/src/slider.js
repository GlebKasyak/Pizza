let Slider = function(items) {
    this.items = items.map((el) => {
        return new SliderItem(el)
    });
    this.$template = $('<div/>')
        .addClass('uk-position-relative uk-visible-toggle uk-light')
        .attr({
            'tabindex': -1,
            'uk-slider': ''
        })
        .append($('<ul/>')
            .addClass('uk-slider-items uk-grid')
            .append(this.items))
        .append(new Link('#', 'uk-position-center-left uk-position-small uk-hidden-hover', 'uk-slidenav-previous', 'previous'))
        .append(new Link('#', 'uk-position-center-right uk-position-small uk-hidden-hover', 'uk-slidenav-next', 'next'));

    return this.$template;
};

let SliderItem = function (el) {
    this.src = el.src;
    this.headText = el.headText;
    this.text = el.text;
    this.$template = $('<li/>')
        .addClass(`uk-width-4-5`)
        .append($('<div/>')
            .addClass('uk-panel')
            .append($('<img/>')
                .attr({
                    'src': this.src,
                    'alt': ' '
                }))
            .append($('<div/>')
                .addClass('uk-position-center uk-text-center')
                .append($('<h2/>')
                    .attr('uk-slider-parallax', 'x: 100,-100')
                    .text(this.headText))
                .append($('<p/>')
                    .attr('uk-slider-parallax', 'x: 200,-200')
                    .text(this.text))));

    return this.$template;
};


