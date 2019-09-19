import axios, { Canceler } from '../../src/index'

const CancelToken = axios.CancelToken // 给 axios 添加一个 CancelToken 的对象
const source = CancelToken.source() // 有一个 source 方法可以返回一个 source 对象

axios.get('/cancel/get').then(res => console.log(res))

axios.get('/cancel/get', {
  cancelToken: source.token // source.token 是在每次请求的时候传给配置对象中的 cancelToken 属性
}).catch(function (e) {
  if (axios.isCancel(e)) {
    console.log('*** Request canceled', e.message)
  }
})

setTimeout(() => {
  source.cancel('*** Operation canceled by the user.')

  axios.post('/cancel/post', { a: 1 }, { cancelToken: source.token}).catch(function(e) {
    if (axios.isCancel(e)) {
      console.log(e.message)
    }
  })
}, 100)


let cancel: Canceler
axios.get('/cancel/get', {
  cancelToken: new CancelToken(c => { // 把类 axios.CancelToken 实例化的对象传给请求配置中的 cancelToken 属性
    cancel = c // 将取消函数 c，赋值给外部定义的 cancel 变量
  })
}).catch(function (e) {
  if (axios.isCancel(e)) {
    console.log('*** Request canceled')
  }
})

setTimeout(() => {
  cancel()
}, 200);
