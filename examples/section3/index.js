var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myobj = { size: 1, label: 'my label' };
printLabel(myobj);
function createSqure(config) {
    var squre = { area: 100, color: 'blue' };
    if (config.width) {
        squre.area = config.width * config.width;
    }
    if (config.color) {
        squre.color = config.color;
    }
    return squre;
}
var mysqura = createSqure({ width: 10, color: 'red' });
console.log('mysqura', mysqura);
var p1 = { x: 10, y: 20 };
// p1.x = 5
var arr = [1, 2, 3, 4];
var ro = arr;
// ro[0] = 2
// ro.push(5)
// ro.length = 100
// arr = ro
arr = ro;
function createSqure2(config) {
    var squre = { area: 100, color: 'blue' };
    if (config.width) {
        squre.area = config.width * config.width;
    }
    if (config.color) {
        squre.color = config.color;
    }
    return squre;
}
var squraParams = { colour: 'red', width: 100 };
var mySqure2 = createSqure2(squraParams);
// let mySqure2 = createSqure2({colour: 'red', width: 100})
// let mySqure2 = createSqure2({colour: 'red', width: 100} as squreConfig2)
// let mySqure2 = createSqure2({colour: 'red', width: 100})
console.log(mySqure2);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['bib', 'cic'];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray2 = ['a', 'b'];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('bepe beeep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 52, 37);
console.log(digital, analog);
