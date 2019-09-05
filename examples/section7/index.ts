/**
 * 类型推断
 * 基础
 */
let x = 3

/**
 * 最佳通用类型
 */
let y = [0, 1, null]

class Animal {
  numLegs: number
}

class Bee extends Animal {}
class Lion extends Animal {}
// let zoo = [new Bee(), new Lion()]
let zoo: Animal[] = [new Bee(), new Lion()]

/**
 * 上下文类型
 */
window.onmousedown = function(mouseEvent) {
  // console.log(mouseEvent.clickTime)
}

window.onmousedown = function(mouseEvent: any) {
  console.log(mouseEvent.clickTime)
}

function createZoo(): Animal[] {
  return [new Bee(), new Lion()]
}
let zoos = createZoo()
