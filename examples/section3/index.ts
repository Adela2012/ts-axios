/** 接口 */
interface labelIF {label: string}
function printLabel(labelObj: labelIF){
  console.log(labelObj.label)
}

let myobj = {size: 1, label: 'my label'}

printLabel(myobj)

/** 可选属性 */
interface squre {area: number; color: string}
interface squreConfig {width?: number; color?: string}

function createSqure(config: squreConfig) {
  let squre = {area: 100, color: 'blue'}
  if (config.width) {
    squre.area = config.width * config.width
  }
  if (config.color) {
    squre.color = config.color
  }
  return squre
}

let mysqura = createSqure({width: 10, color: 'red'})
console.log('mysqura',mysqura)

/** 只读属性 */
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = {x:10, y: 20}
// p1.x = 5

let arr: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = arr
// ro[0] = 2
// ro.push(5)
// ro.length = 100
// arr = ro
arr = ro as number[]

/** 额外的属性检查 */
interface squre2 {area: number; color: string}
interface squreConfig2 {
  width?: number; 
  color?: string;
  // [propName: string]: any
}

function createSqure2(config: squreConfig2): {color: string; area:number} {
  let squre = {area: 100, color: 'blue'}
  if (config.width) {
    squre.area = config.width * config.width
  }
  if (config.color) {
    squre.color = config.color
  }
  return squre
}
let squraParams = {colour: 'red', width: 100}
let mySqure2 = createSqure2(squraParams)

// let mySqure2 = createSqure2({colour: 'red', width: 100})
// let mySqure2 = createSqure2({colour: 'red', width: 100} as squreConfig2)
// let mySqure2 = createSqure2({colour: 'red', width: 100})
console.log(mySqure2)

/** 函数类型 */
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (src, sub) {
  let result = src.search(sub)
  return result > -1
}

/** 可索引的类型 */
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['bib', 'cic']
let myStr: string = myArray[0]

class Animal {
  name: string
}
class Dog extends Animal {
  breed: string
}
// interface NotOkay {
//   [x: number]: Animal
//   [x: string]: Dog
// }

interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: boolean; 
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}

let myArray2: ReadonlyStringArray = ['a', 'b']
// myArray2[2] = 'c' 


/** 类类型 */
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {

  }
}

/** 类静态部分与实例部分的区别 */
interface ClockConstructor {
  new (hour: number, minute: number)
}

// class Clock2 implements ClockConstructor {
//   currentTime: Date
//   constructor(h: number, m: number)
// }


interface ClockConstructor2 {
  new (hour: number, minute: number): ClockInterface2
}

interface ClockInterface2 {
  tick()
}

// function createClock (ctor: ClockCont)
