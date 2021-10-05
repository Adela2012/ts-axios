export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'options' | 'OPTIONS'
| 'patch' | 'PATCH'
| 'head' | 'HEAD'





export interface AxiosRequestConfig {
  url: string
  method: Method
  params?: any
  data?: any
}
