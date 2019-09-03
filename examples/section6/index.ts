/**
 * 泛型
 * 基础示例
 */
function identity<T>(arg: T): T {
  return arg
}
let output1 = identity<string>('mystring')
let output2 = identity('mystring')

/**
 * 使用泛型变量
 */
function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

/**
 * 泛型类型
 */
let myIdentity1: <T>(arg: T) => T = identity
let myIdentity2: <U>(arg: U) => U = identity
let myIdentity3: { <T>(arg: T): T } = identity

interface GenericIdentityFn {
  <T>(arg: T): T
}
let myIdentity4: GenericIdentityFn = identity

interface GenericIdentityFn2<T> {
  (arg: T): T
}
let myIdentity5: GenericIdentityFn2<number> = identity

/**
 * 泛型类
 */
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

let stringNumberic = new GenericNumber<string>()
stringNumberic.zeroValue = ''
stringNumberic.add = function (x, y) {
  return x + y
}
console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'))

/**
 * 泛型约束
 */
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a')

// 类类型在工厂函数中的运用
function create<T>(c: { new(): T }): T {
  return new c
}

// 
class Beekeeper {
  hasMask: Boolean
}
class Lionkeeper {
  nametag: string
}
class Animal {
  numLengs: number
}

class Bee extends Animal {
  keeper: Beekeeper
}
class Lion extends Animal {
  keeper: Lionkeeper
}

function createInstance<T extends Animal>(c: { new(): T }): T {
  return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask
