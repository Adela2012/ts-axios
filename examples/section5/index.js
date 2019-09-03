/**
 * 基本示例
 */
// 命名函数
function add1(x, y) {
    return x + y;
}
// 匿名函数
var AddTwo1 = function (x, y) {
    return x + y;
};
// 捕获函数体外部变量
var z = 100;
function addToZ1(x, y) {
    return x + y + z;
}
/**
 * 函数类型
 */
// 为函数定义类型
function add2(x, y) {
    return x + y;
}
var AddTwo2 = function (x, y) {
    return x + y;
};
// 书写完整函数类型
var AddTwo3 = function (x, y) {
    return x + y;
};
/**
 * 可选参数和默认参数
 */
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Bob'; }
    var restOfName = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfName[_i - 2] = arguments[_i];
    }
    return firstName + ' ' + lastName + restOfName.join(' ');
}
var buildNameFn = buildName;
var deck1 = {
    suits: ['hearts', 'spades', 'clubs', 'dismonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck1.createCardPicker();
var pickedCard1 = cardPicker1();
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        // 箭头函数不会捕获 this
        this.onClickGood = function (e) {
            _this.type = e.type;
        };
    }
    Handler.prototype.onClickBad = function (e) {
        // this.type = e.type
        console.log('clicked');
    };
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () {
    }
};
uiElement.addClickListener(h.onClickGood);
/**
 * 重载
 */
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (Array.isArray(x)) {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 }
];
var pickedCard_1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard_1.card + ' of ' + pickedCard_1.suit);
var pickedCard_2 = pickCard(15);
console.log('card: ' + pickedCard_2.card + ' of ' + pickedCard_2.suit);
