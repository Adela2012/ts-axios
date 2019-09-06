import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 处理请求参数
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
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

export default axios
