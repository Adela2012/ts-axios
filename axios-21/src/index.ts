import { AxiosRequestConfig } from "./types";
import xhr from "./core/xhr";
import { buildUrl } from "./helpers/url";

function axios(config: AxiosRequestConfig): void {
    // processConfig 对 config 中的数据做处理：transformUrl 处理URL
    processConfig(config)

    // 发送请求
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    config.url = transformUrl(config)
}

function transformUrl(config:AxiosRequestConfig): any{
    const {url, params} = config
    return buildUrl(url, params)
}

export default axios
