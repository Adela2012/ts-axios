/** 
 * this
 * 基本示例 
 */
// 命名函数
function add1(x, y) {
  return x + y
}
// 匿名函数
let AddTwo1 = function (x, y) {
  return x + y
}
// 捕获函数体外部变量
let z = 100
function addToZ1(x, y) {
  return x + y + z
}

/** 
 * 函数类型 
 */
// 为函数定义类型
function add2(x: number, y: number): number {
  return x + y
}
let AddTwo2 = function (x: number, y: number): number {
  return x + y
}
// 书写完整函数类型
let AddTwo3: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y
}

/** 
 * 可选参数和默认参数 
 */
function buildName(firstName = 'Bob', lastName?: string, ...restOfName: string[]): string {
  return firstName + ' ' + lastName + restOfName.join(' ')
}

let buildNameFn: (fname: string, lname: string, ...rest: string[]) => string = buildName



/** 
 * this 
 */

interface Card1 {
  suit: string
  card: number
}

interface Deck1 {
  suits: string[]
  cards: number[]

  createCardPicker(this: Deck1): () => Card1
}
let deck1 = {
  suits: ['hearts', 'spades', 'clubs', 'dismonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck1) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

let cardPicker1 = deck1.createCardPicker()
let pickedCard1 = cardPicker1()
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

// this 参数在回调函数里
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  type: string
  onClickBad(this: void, e: Event) {
    // this.type = e.type
    console.log('clicked')
  }
  // 箭头函数不会捕获 this
  onClickGood = (e: Event) => {
    this.type = e.type
  }
}

let h = new Handler()

let uiElement: UIElement = {
  addClickListener() {

  }
}

uiElement.addClickListener(h.onClickGood)

/**
 * 重载
 */
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: {suit: string; card: number}[]): number
function pickCard(x: number): {suit: string; card: number}

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}
let myDeck = [
  {suit: 'diamonds', card: 2},
  {suit: 'spades', card: 10},
  {suit: 'hearts', card: 4}
]
let pickedCard_1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard_1.card + ' of '+ pickedCard_1.suit)

let pickedCard_2 = pickCard(15)
console.log('card: ' + pickedCard_2.card + ' of '+ pickedCard_2.suit)
