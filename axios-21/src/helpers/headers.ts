import { isPlainObject } from "./util"

export function processHeaders(headers: any, data: any): any {
    // 命名
    normalizeHeaderName(headers, 'Content-Type')
    // 如果data存在，Content-Type 没有的情况
    if (isPlainObject(data) && headers && !headers['Content-Type']) {
        headers['Content-Type'] = 'application/json;charset=utf-8'
    }
    return headers
}

function normalizeHeaderName(headers: any, normalizeName: string): any {
    if (!headers) return

    Object.keys(headers).forEach(i => {
        if (i !== normalizeName && i.toUpperCase() === normalizeName.toUpperCase()) {
            headers[normalizeName] = headers[i]
            delete headers[i]
        }
    })

}
