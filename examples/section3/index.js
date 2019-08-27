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
p1.x = 5;
