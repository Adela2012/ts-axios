/** 布尔 */
var isDone = true;
/** 数字 */
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
/** 字符串 */
var myName = 'bob';
/** 数组 */
var list = [1, 2, 3];
var list2 = [2, 3];
/** 元祖 */
var x;
x = ['h', 1];
// 自从 TyeScript 3.1 版本之后，访问越界元素会报错，我们不应该再使用该特性。
// x = [1, 'h']
// x[2] = 'www'
// console.log(x[5].toString())
// x[6] = true
/** 枚举 */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 44] = "Green";
    Color[Color["Blue"] = 45] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[1];
console.log(c, colorName);
/** any */
var notSure = 4;
notSure = 'can be string';
notSure = false;
notSure = [1, 2, 3, 4];
var notSureList = [1, 2, 'ss', false];
notSureList[1] = true;
/** void */
function warnUser() {
    console.log('warn somethind');
}
/** null undefined */
var n = undefined;
var u = null;
var nu = undefined;
/** never */
function error(message) {
    throw new Error(message);
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// create(34)
// create('string')
