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
var Greet = /** @class */ (function () {
    function Greet(message) {
        this.greeting = message;
    }
    Greet.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greet;
}());
var greet = new Greet('world');
console.log(greet.greet());
/** 继承 */
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moves " + distance + " m");
    };
    return Animal2;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Galloping...');
        _super.prototype.move.call(this, 3);
    };
    Dog.prototype.bark = function () {
        console.log('woof!');
    };
    return Dog;
}(Animal2));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        console.log('Slithering...');
        _super.prototype.move.call(this, 4);
    };
    return Snake;
}(Animal2));
var dog = new Dog('Huang');
var snake = new Snake('Bei');
dog.move();
snake.move(2);
/** 公共，私有与受保护的修饰符 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'rhino') || this;
    }
    return Rhino;
}(Animal));
var Employee2 = /** @class */ (function () {
    function Employee2(name) {
        this.name = name;
    }
    return Employee2;
}());
var animal = new Animal('goat');
var rhino = new Rhino();
var employee2 = new Employee2('Bob');
animal = rhino;
// animal = employee2 // error
// new Animal('cat').name
/** 理解 protected */
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee3.prototype.getElevatorPitch = function () {
        return "hello, my name is " + this.name + " and i work in " + this.department;
    };
    return Employee3;
}(Person2));
var howard = new Employee3('howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.department)
/** readonly 修饰符 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Jhon = new Person('Jhon');
// Jhon.name = '1' 
console.log(Jhon.name);
/** 存储器 */
var password = 'secret password';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (password && password == 'secret password') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee;
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log(employee.fullName);
}
/** 静态属性 */
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1);
var grid2 = new Grid(2);
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));
/** 抽象类 */
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting add Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Money at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department;
// department = new Department()
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports()
/** 高级技巧-构造函数 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting)
            return 'hello, ' + this.greeting;
        else
            return Greeter.standardGreeting;
    };
    Greeter.standardGreeting = 'Hello, there';
    return Greeter;
}());
var greeter;
greeter = new Greeter('world');
console.log(greeter.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey, here';
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
