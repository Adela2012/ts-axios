import { transformRequest } from "../helpers/data";
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType // 字符串字面量类型 "" | "arraybuffer" | "blob" | "document" | "json" | "text"
  timeout?: number
  transformRequest?: AxiosTransformer | AxiosTransformer[]
  transformResponse?: AxiosTransformer | AxiosTransformer[]
  withCredentials?: boolean
  cancelToken?: CancelToken
  xsrfCookieName?: string
  xsrfHeaderName?: string
  onDownloadProgress?: (e: ProgressEvent) => void
  onUploadProgress?: (e: ProgressEvent) => void
  auth?: AxiosBasicCredentials
  validateStatus?: (status: number) => boolean
  paramsSerializer?: (params: any) => string
  baseURL?: string,
  [propName: string]: any // 字符串索引签名
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {

}

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}

export interface Axios {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance

  CancelToken: CancelTokenStatic
  Cancel: CancelStatic
  isCancel: (value: any) => boolean
}

export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, reject?: RejectedFn): number
  eject(id: number): void
}

export interface ResolvedFn<T = any> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}

export interface AxiosTransformer {
  (data: any, headers?: any): any
}

/**
 * CancelToken
 */

//  实例类型的接口定义
export interface CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel

  throwIfRequested(): void
}

// 取消方法的接口定义
export interface Canceler {
  (message?: string): void
}

// CancelExecutor 是 CancelToken 类构造函数参数的接口定义。
export interface CancelExecutor {
  (cancel: Canceler): void
}

// CancelTokenSource 作为 CancelToken 类静态方法 source 函数的返回值类型
export interface CancelTokenSource {
  token: CancelToken
  cancel: Canceler
}

// CancelTokenStatic 则作为 CancelToken 类的类类型
export interface CancelTokenStatic {
  new(executor: CancelExecutor): CancelToken

  source(): CancelTokenSource
}

// 实例类型的接口定义
export interface Cancel {
  message?: string
}

// 类类型的接口定义
export interface CancelStatic {
  new(message?: string): Cancel
}

export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance

  CancelToken: CancelTokenStatic
  Cancel: CancelStatic
  isCancel: (value: any) => boolean
}

export interface AxiosBasicCredentials {
  username: string
  password: string
}
