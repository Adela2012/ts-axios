import { AxiosRequestConfig, AxiosPromise } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

// 处理请求参数
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

// 实现请求 params 处理逻辑
function transformUrl (config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}

// 实现请求 body 处理逻辑
function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

// 实现 headers 处理逻辑
function transformHeaders (config: AxiosRequestConfig): any {
  const {headers = {}, data} = config
  return processHeaders(headers, data)
}

export default axios
