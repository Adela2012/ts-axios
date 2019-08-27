// var 1.变量作用域提升 2.重复声明 3.全局作用域
// let 1.块作用域 2.暂时性死区 3.块内不能重复声明 4.嵌套作用域屏蔽
// const 
// 解构 属性命名
let o = {
  a: 'a',
  b: 'b'
}
let {a: newName1, b: newName2} = o
let {a, b}: {a: string, b: string} = o
// 展开