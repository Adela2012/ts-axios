/**
 * 高级类型
 * 交叉类型
 */
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('Jim'), new ConsoleLogger());
var n = jim.name;
jim.log();
/**
 * 联合类型
 */
function padLeft1(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
console.log(padLeft1('Hello', 'true'));
// function getSmallPet(): Fish | Bird {
//   //
// }
// let pet = getSmallPet()
// pet.layEggs()
// pet.swim()
/**
 * 类型保护
 */
// if ((pet as Fish).swim) {
//   (pet as Fish).swim()
// } else {
//   (pet as Bird).fly()
// }
// 用户自定义的类型保护
// function isFish(pet: Fish | Bird): pet is Fish{
//   return (pet as Fish).swim !== undefined
// }
// if (isFish(pet)) {
//   pet.swim()
// } else {
//   pet.fly()
// }
// typeof 类型保护
function isNumber(x) {
    return typeof x === 'number';
}
// instanceof 类型保护
var Bird2 = /** @class */ (function () {
    function Bird2() {
    }
    Bird2.prototype.fly = function () {
        console.log('bird fly');
    };
    Bird2.prototype.layEggs = function () {
        console.log('bird lay eggs');
    };
    return Bird2;
}());
var Fish2 = /** @class */ (function () {
    function Fish2() {
    }
    Fish2.prototype.swim = function () {
        console.log('fish swim');
    };
    Fish2.prototype.layEggs = function () {
        console.log('fish lay eggs');
    };
    return Fish2;
}());
function getRandomPet() {
    return Math.random() > 0.5 ? new Bird2() : new Fish2();
}
var pet2 = getRandomPet();
if (pet2 instanceof Bird2) {
    pet2.fly();
}
if (pet2 instanceof Fish2) {
    pet2.swim();
}
/**
 * 可以为 null 的类型
 */
var s = 'foo';
s = null;
var sn = 'bar';
sn = null;
sn = undefined;
// 可选参数和可选属性
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null);
// 使用类型断言手动去除 null 或 undefined
function broken(name) {
    function postfix(epithet) {
        console.log('flg2', name.charAt(0) + '. the ' + epithet);
        return name.charAt(0) + '. the ' + epithet; // error
    }
    name = name || 'Bob';
    return postfix('great');
}
function fixed(name) {
    function postfix(epithet) {
        console.log('flg', name.charAt(0) + '. the ' + epithet);
        return name.charAt(0) + '. the ' + epithet; // ok
    }
    name = name || 'Bob';
    return postfix('great');
}
broken(null);
fixed(null);
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === 'ease-in') {
        }
        else if (easing === 'ease-out') {
        }
        else if (easing === 'ease-in-out') {
        }
        else {
            // error
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, 'ease-in');
button.animate(0, 0, 'uneasy');
