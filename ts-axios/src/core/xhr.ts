import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers';
import { createError } from '../helpers/error'
import CancelToken from '../cancel/CancelToken';
import { isURLSameOrigin } from '../helpers/url';
import cookie from '../helpers/cookie'
import { isFormData } from '../helpers/util';
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {

    const { data = null, url, method = 'get', headers, responseType, timeout, cancelToken, withCredentials, xsrfCookieName, xsrfHeaderName, onDownloadProgress, onUploadProgress } = config

    const request = new XMLHttpRequest()


    request.open(method.toUpperCase(), url!, true)

    configureRequest() // 配置 request 对象
    addEvents ()// 给 request 添加事件处理函数
    processHeaders() // 处理请求 headers
    processCancel() // 处理请求取消逻辑

    request.send(data)


    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(createError(`Request failed with status code ${response.status}`, config, null, request, response))
      }
    }

    // 配置 request 对象
    function configureRequest (): void {
      if (timeout) {
        request.timeout = timeout
      }

      if (responseType) {
        request.responseType = responseType
      }

      if (withCredentials) {
        request.withCredentials = withCredentials
      }

    }
    // 给 request 添加事件处理函数
    function addEvents (): void {
      request.onreadystatechange = function handleLoad() {
        if (request.readyState !== 4) {
          return
        }

        if (request.status === 0) {
          return
        }

        const responseHeaders = parseHeaders(request.getAllResponseHeaders())
        const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
        const response: AxiosResponse = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        }
        handleResponse(response)
      }
      request.onerror = function handleError() {
        reject(createError('Netwok Error', config, null, request))
      }
      request.ontimeout = function handleTimeout () {
        reject(createError(`Timeout of ${timeout}ms exceeded`, config, 'ECONNABORTED', request))
      }
      if (onDownloadProgress) {
        request.onprogress = onDownloadProgress
      }
      if (onUploadProgress) {
        request.upload.onprogress = onUploadProgress
      }
    }
    // 处理请求 headers
    function processHeaders() {
      // 请求的数据是 FormData 类型，删除请求 headers 中的 Content-Type 字段，让浏览器自动根据请求数据设置 Content-Type
      if (isFormData(data)) {
        delete headers['Content-Type']
      }
      if ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName) {
        const xsrfValue = cookie.read(xsrfCookieName)
        if (xsrfValue) {
          headers[xsrfHeaderName!] = xsrfValue
        }
      }
      Object.keys(headers).forEach((name) => {
        if (data === null && name.toLowerCase() === 'content-type') {
          delete headers[name]
        } else {
          request.setRequestHeader(name, headers[name])
        }
      })

    }
    // 处理请求取消逻辑
    function processCancel() {
      if (cancelToken) {
        CancelToken.promise.then(reason => {
          request.abort()
          reject(reason)
        })
      }
    }
  })
}
