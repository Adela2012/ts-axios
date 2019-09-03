class Greet {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greet = new Greet('world')
console.log(greet.greet())


/** 继承 */

class Animal2 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} moves ${distance} m`)
  }
}
class Dog extends Animal2 {
  constructor(name: string){
    super(name)
  }
  move(distance: number = 5) {
    console.log('Galloping...')
    super.move(3)
  }
  bark () {
    console.log('woof!')
  }
}

class Snake extends Animal2 {
  constructor(name: string){
    super(name)
  }
  move(distance: number = 10) {
    console.log('Slithering...')
    super.move(4)
  }
}

const dog: Animal2 = new Dog('Huang')
const snake = new Snake('Bei')
dog.move()
snake.move(2)

/** 公共，私有与受保护的修饰符 */
class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

class Rhino extends Animal {
  constructor() {
    super('rhino')
  }
}

class Employee2 {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal('goat')
let rhino = new Rhino()
let employee2 = new Employee2('Bob')

animal = rhino
// animal = employee2 // error

// new Animal('cat').name


/** 理解 protected */
class Person2 {
  protected name: string
  constructor(name: string){
    this.name = name
  }
}

class Employee3 extends Person2 {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getElevatorPitch() {
    return `hello, my name is ${this.name} and i work in ${this.department}`
  }
}

let howard = new Employee3('howard', 'Sales')
console.log(howard.getElevatorPitch())
// console.log(howard.department)

/** readonly 修饰符 */

class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

let Jhon = new Person ('Jhon')
// Jhon.name = '1' 
console.log(Jhon.name)


/** 存储器 */

let password = 'secret password'
class Employee {
  private _fullName: string
  get fullName(): string {
    return this._fullName
  }
  set fullName(newName: string) {
    if (password && password == 'secret password') {
      this._fullName = newName
    } else {
      console.log('Error: Unauthorized update of employee')
    }
  }
}

let employee = new Employee
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}

/** 静态属性 */

class Grid {
  static origin = {x: 0, y: 0}
  scale: number

  constructor (scale: number) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: {x: number, y: number}) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist*xDist + yDist*yDist) * this.scale
  }
}

let grid1 = new Grid(1)
let grid2 = new Grid(2)

console.log(grid1.calculateDistanceFromOrigin({x:3, y: 4}))
console.log(grid2.calculateDistanceFromOrigin({x:3, y: 4}))


/** 抽象类 */
abstract  class Department {
  name: string
  constructor(name: string){
    this.name = name
  }

  printName():void {
    console.log('Department name: ' + this.name)
  }

  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting add Auditing')
  }

  printMeeting():void {
    console.log('The Accounting Department meets each Money at 10am.')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department
// department = new Department()
department = new AccountingDepartment()
department.printName()
department.printMeeting()
// department.generateReports()

/** 高级技巧-构造函数 */

class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(message?: string) {
    this.greeting = message
  }
  greet() {
    if (this.greeting) 
      return 'hello, ' + this.greeting
    else 
      return Greeter.standardGreeting
  }
}

let greeter: Greeter
greeter =  new Greeter('world')
console.log(greeter.greet())

let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey, here'

let  greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())

/** 把类当做接口使用 */

class Point {
  x: number
  y: number
}

interface Point3d extends Point{
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}