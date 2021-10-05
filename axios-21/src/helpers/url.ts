import { isDate, isPlainObject } from "./util"

/**
 * 把 params 拼接到 url
 * @param url
 * @param params
 */
export function buildUrl(url: string, params?: any) {
    // params: 空值忽略，参数值为Array、Date、Object，encode（特殊字符支持：'@:$,[] '），丢弃url中的哈希标记，保留 url 中已存在的参数
    if (!params) return url

    const arr: string[] = []
    Object.keys(params).forEach(key => {
        let val = params[key]
        if (val === null || typeof val === 'undefined') {
            return
        }
        if (Array.isArray(val)) {
            key = `${key}[]`
        } else {
            val = [val]
        }

        val.forEach((i: string) => {
            if (isDate(i)) {
                i = i.toISOString()
            }
            if (isPlainObject(i)) {
                i = JSON.stringify(i)
            }
            arr.push(`${encode(key)}=${encode(i)}`)
        })
    })

    const markIndex = url.indexOf('#')
    if (~markIndex) {
        url = url.substr(0, markIndex)
    }

    url += (~url.indexOf('?') ? '&' : '?') + arr.join('&')

    return url
}

function encode(val: string): string {
    const obj: object = { '%40': '@', '%3A': ':', '%24': '$', '%2C': ',', '%5B': '[', '%5D': ']', '%20': '+' }
    let encodeStr = encodeURIComponent(val)
    Object.keys(obj).forEach(i => {
        let reg = new RegExp(i, 'ig')
        encodeStr = encodeStr.replace(reg, obj[i])
    })
    return encodeStr
}
