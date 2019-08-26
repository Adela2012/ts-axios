/** 布尔 */
let isDone: boolean = true

/** 数字 */
let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

/** 字符串 */
let myName: string = 'bob'

/** 数组 */
let list: number[] = [1,2,3]
let list2: Array<number> = [2,3]

/** 元祖 */
let x: [string, number]
x = ['h', 1]
// 自从 TyeScript 3.1 版本之后，访问越界元素会报错，我们不应该再使用该特性。
// x = [1, 'h']
// x[2] = 'www'
// console.log(x[5].toString())
// x[6] = true

/** 枚举 */
enum Color {Red = 1, Green = 44, Blue}
let c: Color = Color.Green
let colorName: string = Color[1]
console.log(c,colorName)

/** any */
let notSure: any = 4
notSure = 'can be string'
notSure = false
notSure = [1,2,3,4]

let notSureList: any[] = [1,2,'ss', false]
notSureList[1] = true

/** void */
function warnUser(): void {
  console.log('warn somethind')
}

/** null undefined */
let n: null = undefined
let u: undefined = null
let nu: number = undefined

/** never */
function error(message: string): never {
  throw new Error(message)
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while(true) {
  }
}

/** object */
declare function create(o: object | null): void

create({prop: 0})
create(null)

// create(34)
// create('string')

/** 类型断言 */
let someValue: any = 'this is a string'
let strLen: number = (<string>someValue).length
let strLen2: number = (someValue as string).length
