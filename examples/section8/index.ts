/**
 * 高级类型
 * 交叉类型
 */

function extend<T, U> (first: T, second: U): T & U {
  let result = {} as T & U
  for (let id in first) {
    result[id] = first[id] as any
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any
    }
  }
  return result
}

class Person {
  constructor (public name: string) {}
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log () {

  }
}

var jim = extend(new Person('Jim'), new ConsoleLogger())
var n = jim.name
jim.log()



/**
 * 联合类型
 */
function padLeft1 (value: string, padding: number | string) {
  if (typeof padding === 'number') {
    return Array(padding+1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

console.log(padLeft1('Hello', 'true'))

// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

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
function isNumber (x: any):x is string {
  return typeof x === 'number'
}

// instanceof 类型保护

class Bird2 {
  fly() {
    console.log('bird fly')
  }
  layEggs() {
    console.log('bird lay eggs')
  }
}

class Fish2 {
  swim() {
    console.log('fish swim')
  }
  layEggs() {
    console.log('fish lay eggs')
  }
}

function getRandomPet () {
  return Math.random() > 0.5 ? new Bird2() : new Fish2()
}

let pet2 = getRandomPet()

if (pet2 instanceof Bird2) {
  pet2.fly()
}

if (pet2 instanceof Fish2) {
  pet2.swim()
}

/**
 * 可以为 null 的类型
 */
let s = 'foo'
s = null
let sn: string | null = 'bar'
sn = null

sn = undefined

// 可选参数和可选属性
function f(x: number, y?: number) {
  return x + (y || 0)
}

f(1, 2)
f(1)
f(1, undefined)
f(1, null)

// 使用类型断言手动去除 null 或 undefined
function broken(name: string | null): string {
  function postfix(epithet: string) {
    console.log('flg2',name!.charAt(0)+ '. the ' + epithet )
    return name.charAt(0) + '. the ' + epithet // error
  }
  name = name || 'Bob'
  return postfix('great')
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    console.log('flg',name!.charAt(0)+ '. the ' + epithet )
    return name!.charAt(0)+ '. the ' + epithet // ok
  }
  name = name || 'Bob'
  return postfix('great')
}

broken(null)
fixed(null)

/**
 * 字符串字面量类型
 */
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
  animate (dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {

    } else if (easing === 'ease-out') {
      
    } else if (easing === 'ease-in-out') {
      
    } else {
      // error
    }
  }
}

let button = new UIElement()
button.animate(0,0,'ease-in')
button.animate(0,0,'uneasy')