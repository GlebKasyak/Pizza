let Cart = function (heading, id, wrapper) {
    this.heading = heading;
    this.id = id;
    this.items = [];
    this.$wrapper = wrapper;
    this.$itemlist =  new ModalList('item-list');
    this.getItemList = () => this.$itemlist;
    this.$template =  $('<div/>')
        .attr({
            'id': this.id,
            'uk-modal' : ''
        })
        .append($('<div/>')
            .addClass('uk-modal-dialog uk-modal-body')
            .append(new Heading(2, this.heading, 'uk-modal-title'))
            .append(this.$itemlist)
            .append(new Paragraph(new Button('Cancel', 'uk-button uk-button-default uk-modal-close'))));
    window.cart = this;
    if(this.$wrapper) {
        window.modal = this;
        return $(this.$wrapper)
            .append(this.$template);
    }
    else {
        return this.$template;
    }
};

Cart.prototype.addItem = function(item) {
    this.items.push(item);
};

Cart.prototype.getIndexByKey = function(key) {
    let res = null;
    for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].title === key) res = i;
    }
    return res;
};

Cart.prototype.removeItemByKey = function(key) {
        this.items.splice(key, 1);
};

Cart.prototype.updateCart = function() {
    this.$itemlist.children().remove();
    this.items.forEach((el) => {
        this.$itemlist.append(new CartItem(el.title, el.count, el.price, el.image));
    })
};

