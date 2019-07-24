let AboutUsPAge = function(text, atr, wrapper) {
    this.wrapper = wrapper ;
    this.text = text;
    this.atr = atr;
    this.$template = $('<div/>')
        .addClass('uk-container')
        .append($('<dl/>')
            .append($('<dt/>')
                .text('Кто мы?'))
            .append($('<dd/>')
                .text(this.text))
            .append($('<dt/>')
                .text('Что ещё?'))
            .append($('<dd/>')
                    .append($('<ul/>')
                        .addClass('uk-list uk-list-bullet')
                        .append(new List(aboutUs[0].whatElse.li1))
                        .append(new List(aboutUs[0].whatElse.li2))
                        .append(new List(aboutUs[0].whatElse.li3))
                        .append(new List(aboutUs[0].whatElse.li4))
                    )))
        .append($('<div/>')
            .append($('<h3/>')
                .text('Геолокация'))
            .attr('id', 'geo')
            .append($('<iframe/>')
                .attr('src', this.atr)));

    return this.$template;
};

let List = function(text) {
    this.text = text;
    return $('<li/>')
            .text(this.text)
};




