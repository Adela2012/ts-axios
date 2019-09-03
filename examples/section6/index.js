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
/**
 * 泛型
 * 基础示例
 */
function identity(arg) {
    return arg;
}
var output1 = identity('mystring');
var output2 = identity('mystring');
/**
 * 使用泛型变量
 */
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
/**
 * 泛型类型
 */
var myIdentity1 = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
var myIdentity4 = identity;
var myIdentity5 = identity;
/**
 * 泛型类
 */
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumberic = new GenericNumber();
stringNumberic.zeroValue = '';
stringNumberic.add = function (x, y) {
    return x + y;
};
console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 在泛型约束中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
// 类类型在工厂函数中的运用
function create(c) {
    return new c;
}
// 
var Beekeeper = /** @class */ (function () {
    function Beekeeper() {
    }
    return Beekeeper;
}());
var Lionkeeper = /** @class */ (function () {
    function Lionkeeper() {
    }
    return Lionkeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
