import { AxiosRequestConfig } from "./types";
import xhr from "./core/xhr";
import { buildUrl } from "./helpers/url";
import { transformRequest } from "./helpers/data";
import { processHeaders } from "./helpers/headers";

function axios(config: AxiosRequestConfig): void {
    // processConfig 对 config 中的数据做处理
    processConfig(config)

    // 发送请求
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    // transformUrl 处理URL
    config.url = transformUrl(config)
    // transformHeaders 处理 header
    config.headers = transformHeaders(config)
    // transformRequestData 处理 body 逻辑
    config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): any {
    const { url, params } = config
    return buildUrl(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
    return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
    const { headers = {}, data } = config
    return processHeaders(headers, data)
}

export default axios
