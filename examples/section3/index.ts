/** 接口 */
interface labelIF {label: string}
function printLabel(labelObj: labelIF){
  console.log(labelObj.label)
}

let myobj = {size: 1, label: 'my label'}

printLabel(myobj)

/** 可选属性 */
interface squre {area: number, color: string}
interface squreConfig {width?: number, color?: string}

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
