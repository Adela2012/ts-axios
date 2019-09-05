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
 * 类型推断
 * 基础
 */
var x = 3;
/**
 * 最佳通用类型
 */
var y = [0, 1, null];
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
// let zoo = [new Bee(), new Lion()]
var zoo = [new Bee(), new Lion()];
/**
 * 上下文类型
 */
window.onmousedown = function (mouseEvent) {
    // console.log(mouseEvent.clickTime)
};
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.clickTime);
};
function createZoo() {
    return [new Bee(), new Lion()];
}
var zoos = createZoo();
