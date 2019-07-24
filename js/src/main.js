let products = [
    {
        title: 'Техас',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/12/12/texas_small.png',
        description: 'Тесто для пиццы, лук, Томатный соус Domino\'s, Кукуруза, Ветчина, Сыр моцарелла, Шампиньоны',
        price: '9.9' + 'p',
        id: 'pizza-texas',
        className: 'cardPizza'
    },
    {
        title: 'Гавайская',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/gavayskaya.png',
        description: 'Тесто для пиццы, сыр моцарелла, Курица, Томатный соус Domino\'s, Ананас',
        price: '9.9' + 'p',
        id: 'pizza-hawaiian',
        className: 'cardPizza'
    },
    {
        title: 'Пепперони и томаты',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/12/12/pepperoni_i_tomaty_small.png',
        description: 'Тесто для пиццы, Соус барбекю, Пепперони, Сыр моцарелла, Томаты',
        price: '9.9' + 'p',
        id: 'pizza-pepperoni',
        className: 'cardPizza'
    },
    {
        title: 'Маргарита',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/margarita.png',
        description: 'Тесто для пиццы, итальянские травы, томатный соус, томаты и моцарелла',
        price: '9.9' + 'p',
        id: 'pizza-margarita',
        className: 'cardPizza'
    },
    {
        title: 'Ветчина и грибы',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/vetchina_i_griby.png',
        description: 'Тесто для пиццы, томатный соус Domino\'s, Сыр моцарелла, Ветчина, Шампиньоны',
        price: '9.9' + 'p',
        id: 'pizza-ham',
        className: 'cardPizza'
    },
    {
        title: 'Сырная',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/5_syrov.png',
        description: 'Тесто для пиццы, пармезан, Крем фреш, Чеддер, Голубой сыр, Фета, Сыр моцарелла',
        price: '9.9' + 'p',
        id: 'pizza-cheese',
        className: 'cardPizza'
    },
    {
        title: 'Пицца-пирог',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/5e2b3976-1ef1-4beb-91b3-b4db02e44fce.jpg',
        description: 'Тесто для пиццы, ананасы, молоко сгущеное и брусника',
        price: '9.9' + 'p',
        id: 'pizza-cake',
        className: 'cardPizza'
    },
    {
        title: 'Сырный цыпленок',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/7d2d57ef-1e81-4e96-9558-a1e0321471e7.jpg',
        description: 'Тесто для пиццы, сырный соус, цыпленок, томаты и моцарелла',
        price: '9.9' + 'p',
        id: 'pizza-cheese-chicken',
        className: 'cardPizza'
    },
    {
        title: 'Четыре сыра',
        image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/ebf8ce09-e5b2-4e7b-a32a-682c162094c9.jpg',
        description: 'Тесто для пиццы,сливочный соус, смесь сыров пармезан и чеддер, сыр блю чиз и моцарелла',
        price: '9.9' + 'p',
        id: 'pizza-four-seasons',
        className: 'cardPizza'
    }
];

let dough = {
    thin: {
        pizzaTexas: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/8eed8b7a-9d8f-4405-aac2-f0e201172829.jpg',
        pizzaHawaiian: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/8ea20118-9db1-4cfb-bc6b-833a2c021e54.jpg',
        pizzaPepperoni: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/ab846e5f-5bf7-4f95-a064-532dbfa963f8.jpg',
        pizzaMargarita: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/87bd228b-bf61-433c-9acb-a388b7ca116f.jpg',
        pizzaHam: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/988929c5-eee9-45e0-ab33-05877fe899e2.jpg',
        pizzaCheese: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/24878e3f-79f8-4a1b-ac0e-59d2f7e5a17d.jpg',
        pizzaCake: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b6fe3c85-10b8-449c-a71d-bc6659ded5ae.jpg',
        pizzaCheeseChicken: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1578b4f0-0865-4fcd-9dbb-e3287db808fc.jpg',
        pizzaFourCheeses: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/5c8ce1e0-d5c5-4f99-872c-3f4101b6d1cf.jpg'
    },
    thick: {
        pizzaTexas: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2aa861d0-5bf0-4cac-ba9d-2c9864600a3f.jpg',
        pizzaHawaiian: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/943257c9-8bfa-4d55-a867-b905ef3ef2eb.jpg',
        pizzaPepperoni: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/545dd4d0-7459-4786-96f6-0134d2d39a13.jpg',
        pizzaMargarita: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a4f239f2-652e-41f1-b156-d5f6d468740d.jpg',
        pizzaHam: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/e1506ad8-bd6c-4999-8ab6-96ee40603efe.jpg',
        pizzaCheese: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/e9394aea-45a4-4475-a367-c45ca2905588.jpg',
        pizzaCake: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a79b3703-4abc-488a-aa62-7a8f270190c8.jpg',
        pizzaCheeseChicken: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/77d16c37-da30-45e0-80f9-757e37ca9730.jpg',
        pizzaFourCheeses: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fe56bee4-4df2-433e-bdde-c645ba221027.jpg'
    }
};

let size = [
    {
        text: '25 См',
        href: '',
        value: '25',
        wrapper: 'li',
        className: 'min'

    },
    {
        text: '30 См',
        href: '',
        value: '30',
        wrapper: 'li',
        className: 'middle'
    },
    {
        text: '35 См',
        href: '',
        value: '35',
        wrapper: 'li',
        className: 'big'
    }
];

let drinks = [
    {
        title: 'Coca-Cola, 0.5 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/11/19/%D0%BA%D0%BE%D0%BB%D0%B0_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_19.11.18.png',
        description: '0.5 Л',
        price: '2.1р',
        id: 'coca05',
        className: 'cardDrink'
    },
    {
        title: 'Coca-Cola, 1 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/11/19/%D0%BA%D0%BE%D0%BB%D0%B0_1%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_19.11.18.png',
        description: '1 Л',
        price: '2.8р',
        id: 'coca1',
        className: 'cardDrink'
    },
    {
        title: 'Sprite',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%81%D0%BF%D1%80%D0%B0%D0%B9%D1%82_1%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png',
        description: '1 Л',
        price: '2.8р',
        id: 'sprite',
        className: 'cardDrink'
    },
    {
        title: 'Fanta',
        image: 'https://images.dominos.by/media/dominos/osg/api/2017/03/15/F_Orange_1L.png',
        description: '1 Л',
        price: '2.8р',
        id: 'fanta',
        className: 'cardDrink'
    },
    {
        title: 'RICH Апельсиновый',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%81%D0%BE%D0%BA_%D0%A0%D1%87%D0%B8_%D0%90%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9_1%D0%BB.png',
        description: 'Натуральный апельсиновый сок. 1 Л',
        price: '3.7р',
        id: 'richOrange',
        className: 'cardDrink'
    },
    {
        title: 'RICH Яблочный',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A1%D0%BE%D0%BA_%D1%80%D0%B8%D1%87_%D1%8F%D0%B1%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_1%D0%BB.png',
        description: 'Натуральный яблочный сок. 1 Л',
        price: '3.5р',
        id: 'richApple',
        className: 'cardDrink'
    },
    {
        title: 'Bonaqua',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D0%BD-%D0%B3%D0%B0%D0%B7_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_19.11.18.png',
        description: '0.5 Л',
        price: '1.4р',
        id: 'bonaqua',
        className: 'cardDrink'
    },
    {
        title: 'Fuze Tea',
        image: 'https://images.dominos.by/media/dominos/osg/api/2019/01/29/FUZE_TEA_GT_500_Dry_StrawbRasp_Closed.png',
        description: '0.5 Л',
        price: '2.2р',
        id: 'fuzeTea',
        className: 'cardDrink'
    },
    {
        title: 'Квас Хатни',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BA%D0%B2%D0%B0%D1%81_%D1%85%D0%B0%D1%82%D0%BD%D0%B8_09%D0%BB.png',
        description: '1 Л',
        price: '2.2р',
        id: 'kvass-khatni',
        className: 'cardDrink'
    }
    ];

// let result = drinks.map(elem => elem.id);
// console.log(result)
//
// function f2() {
//     result.forEach((el) => {
//         console.log(el)
//     })
// }
// f2()

// function f1(drinks) {
//     let arr = [];
//     for(let i = 0; i < drinks.length; i++) {
//         arr.push(drinks[i].id)
//     }
//     return arr
// }
//
// console.log(f1(drinks))


let drinksInformation = [{
    coca05: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 10.6 г',
        energyValue: 'Энергетическая ценность - 42 ккал.'
    },
    coca1: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 10.6 г',
        energyValue: 'Энергетическая ценность - 42 ккал.'
    },
    sprite: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 10.2 г',
        energyValue: 'Энергетическая ценность - 42 ккал.'
    },
    fanta: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 12 г',
        energyValue: 'Энергетическая ценность - 47 ккал.'
    },
    richOrange: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 10.6 г',
        energyValue: 'Энергетическая ценность - 42 ккал.'
    },
    richApple: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 12 г',
        energyValue: 'Энергетическая ценность - 48 ккал.'
    },
    bonaqua: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 0 г',
        energyValue: 'Энергетическая ценность - 0 ккал.'
    },
    fuzeTea: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 7 г',
        energyValue: 'Энергетическая ценность - 29 ккал.'
    },
    kvas: {
        fat: 'Жиры - 0 Г',
        squirrels: 'Белки - 0 г',
        carbohydrates: 'Углеводы - 8 г',
        energyValue: 'Энергетическая ценность - 33 ккал.'
    }
}];

let souces = [
    {
        title: 'Соус Барбекю',
        image: 'https://images.dominos.by/media/dominos/osg/api/2019/01/08/dippot_BBQ.png',
        description: '',
        price: '0.7р',
        id: '',
        className: 'cardSous'
    },
    {
        title: 'Соус Томатный',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A2%D0%BE%D0%BC%D0%B0%D1%82%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png',
        description: '',
        price: '0.7р',
        id: '',
        className: 'cardSous'
    },
    {
        title: 'Сальса',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A1%D0%B0%D0%BB%D1%8C%D1%81%D0%B0_%D0%BF%D0%BD%D0%B3.png',
        description: '',
        price: '0.7р',
        id: '',
        className: 'cardSous'
    },
    {
        title: 'Кисло Сладкий',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%9A%D0%B8%D1%81%D0%BB%D0%BE-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BD%D0%B3.png',
        description: '',
        price: '0.7р',
        id: '',
        className: 'cardSous'
    },
    {
        title: 'Соус Карри',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%9A%D0%B0%D1%80%D1%80%D0%B8_%D0%BF%D0%BD%D0%B3.png',
        description: '',
        price: '0.7р',
        id: '',
        className: 'cardSous'
    },
    {
        title: 'Соус Сырный',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A1%D1%8B%D1%80%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png',
        description: '',
        price: '0.7р',
        id: '',
        className: 'cardSous'
    }
];

let nav = [
    {
        text: 'Главная',
        address: '/',
        className: '',
        wrapper: 'li',

    },
    {
        text: 'Напитки',
        address: '/drinks',
        className: '',
        wrapper: 'li',

    },
    {
        text: 'Соусы',
        address: '/souces',
        className: '',
        wrapper: 'li'
    },
    {
        text: 'О нас',
        address: '/about',
        className: '',
        wrapper: 'li',
    },
    {
        text: 'Ваш заказ',
        address: '/check',
        className: '',
        wrapper: 'li'
    },
    {
        text: 'Корзина',
        address: '#modal-example',
        className: 'uk-text-danger open-modal-btn',
        wrapper: 'li',
        specAttr: 'uk-toggle'
    }
];

let slider = [
    {
        src: '/img/headermain.jpg',
        headText: 'Добро пожаловать в Pizza!',
        text: 'Наш телефон: +666 666'
    },
    {
        src: '/img/header2.jpg',
        headText: 'Хочешь стать частью нашей команды?',
        text: 'Тогда с тебя 100$ Бу-га-га!!'
    },
    {
        src: '/img/header8.jpg',
        headText: 'У нас лучшая забигаловка на районе',
        text: 'Все конкуренты тупо стоят в сторонке!'
    },
    {
        src: '/img/header4.jpg',
        headText: 'Кто здесь отец?',
        text: 'Я, здесь, Отец!!!'
    },
    {
        src: '/img/header5.jpg',
        headText: 'Ну и на последок, мой дивиз:',
        text: 'Ёу собаки!Я Наруто Удзумаки!!'
    }
];

let footer = [
    {
        image: 'https://dominos.by/images/img-ffe308.svg',
        heading: 'Гугл-плекс',
        text: 'Клиентов в месяц'
    },
    {
        image: 'https://dominos.by/images/img-a0aa39.svg',
        heading: '666',
        text: 'Пиццерия в Беларуси'
    },
    {
        image: 'https://dominos.by/images/img-22608c.svg',
        heading: 'Все',
        text: 'Страны'
    },
    {
        image: 'https://dominos.by/images/img-013a0a.svg',
        heading: '24/7',
        text: 'Доставляем'
    },
    {
        image: 'https://dominos.by/images/img-cf4647.svg',
        heading: '00:00 - 00:01',
        text: 'Время работы пиццерий'
    }
];

let aboutUs = [{
    whatElse : {
        li1: 'Мы предлагаем услугу «Еда на вынос». Закажите Ваши любимые блюда из любого кафе, заберите заказ сами.',
        li2: 'Мы осуществляем доставку одновременно из нескольких кафе;',
        li3: 'Каждую неделю действуют акции от партнеров Pizza. Участвуйте и экономьте на Ваших заказах!',
        li4: 'Регулярно действуют специальные предложения с накоплением бонусных баллов для Ваших последующих заказов;'
    },
    we: `Pizza - это быстрая служба доставки из лучших кафе и ресторанов Минска, Могилёва, Бреста, Гомеля, Гродно
         и Витебска. Мы появляемся тогда, когда Вы голодны – ранним утром, во время обеда и ужина и даже поздно ночью. Мы работаем 
         24 часа 7 дней в неделю в Минске и с 09:00 до 03:00 (воскресенье, понедельник-среда) и с 09:00 до 04:00 (четверг-суббота) в регионах.
         Доставляем пиццу, суши, бургеры, традиционные белорусские блюда, итальянскую пасту, всевозможные десерты и прочие разновидные блюда,
         которые порадуют Ваш аппетит, а также широкий ассортимент безалкогольных напитков!`,

    atr: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.40039569943!2d27.486838023236253!3d53.87130939747129!2m3!1f0!2f0!3f0!3m2! 
        '1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd076961aa753%3A0x53f624990bd8ef2e!2z0L_RgNC-0YHQvy4g0JPQsNC30LXRgtGLINCf0YDQsNCy0LTQsCAxMdC0LCDQnNC4
        '0L3RgdC6IDIyMDA4OQ!5e0!3m2!1sru!2sby!4v1553970113340!5m2!1sru!2sby`
}];




let Image = function (classNames, src, alt) {
    this.classNames = classNames;
    this.src = src;
    this.alt = alt || 'Broken image';
    this.$template = $('<img/>')
        .addClass(this.classNames)
        .attr({
            'src': this.src,
            'alt': this.alt
        });
    return this.$template;
};

let Button = function (text, classNames, id, type, icon) {
    this.text = text;
    this.id = id || 'order';
    this.classNames = classNames || 'uk-button uk-button-default';
    this.type = type || 'button';
    this.icon = icon;
    this.$template = $('<button/>')
        .addClass(this.classNames)
        .attr({
            'id': this.id,
            'type': this.type
        })
        .text(this.text)
        .append(this.icon);

    return this.$template;
};

let Heading = function (level, text, classNames) {
    this.text = text;
    this.level = level;
    this.classNames = classNames || 'uk-card-title';
    this.$template = $(`<h${this.level}/>`)
        .text(this.text)
        .addClass(this.classNames);

    return this.$template;
};

let Paragraph = function (text, classNames) {
    this.text = text;
    this.classNames = classNames;
    return $('<p/>')
        .html(this.text)
        .addClass(this.classNames);
};

let Input = function (val, placeholder, classNames,  type) {
    this.val = val;
    this.placeholder = placeholder;
    this.className = classNames || 'uk-input';
    this.type = type || 'text';
    this.$template = $('<input/>')
        .addClass(this.className)
        .attr({
            type: this.type,
            placeholder: this.placeholder
        })
        .val(this.val);

    return this.$template;
};

let ModalList = function(id, className) {
    this.id = id;
    this.className = className || '';
    this.$template = $('<ul/>')
        .addClass(this.className)
        .attr('id', this.id);

    return this.$template;
};

let Link = function(href, className, specAttr, direction) {
    this.className = className;
    this.specAttr = specAttr;
    this.href = href || '#';
    this.direction = direction;
    this.$template = $('<a/>')
        .addClass(this.className)
        .attr({
            'uk-slider-item': this.direction,
            [this.specAttr]: '',
            'href': this.href
        });

    return this.$template;
};

window.onload = function () {
    $('#nav-container').append(new Nav(nav));

    if(this.location.pathname == '/') {
        $('#nav-container').parent().append(new Slider(slider));
    }

    $('footer').append(new Footer(footer));

    products.forEach(function (product) {
        $('.pizza-list').append(new Card(product.title, product.image, product.description, product.price, product.id, product.className));
    });

    drinks.forEach(function (drink) {
        $('.drinks-list').append(new Card(drink.title, drink.image, drink.description, drink.price, drink.id, drink.className));
    });
    souces.forEach(function (souce) {
        $('.souces-list').append(new Card(souce.title, souce.image, souce.description, souce.price, souce.id, souce.className));
    });

    $('#about-us').append( new AboutUsPAge(aboutUs[0].we, aboutUs[0].atr));

    $('#order-window').append(new OrderCard())
};
