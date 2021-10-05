import { AxiosRequestConfig } from "../types";

export default function xhr(config: AxiosRequestConfig): void {
    const { url, method = 'get', data = null, headers } = config

    let request = new XMLHttpRequest()

    request.open(method.toUpperCase(), url, true)

    // 请求 header 配置 setRequestHeader
    Object.keys(headers).forEach(i => {
        let header = headers[i]
        if (data === null && i === 'Content-Type') {
            delete headers[i]
        } else {
            request.setRequestHeader(i, header)
        }
    })

    request.send(data)


}
