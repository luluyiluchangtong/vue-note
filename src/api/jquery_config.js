import $ from 'jquery'

// 设置请求的baseUrl
let baseURL = "https://www.easy-mock.com/mock/5ad4527b4a76b81c1846e71e"

let ajax = function (config) {  // 此时该函数就是一个 promise 对象

    config.url = baseURL + config.url

    return new Promise(function (resolve, reject) {
        $.ajax({
            url: config.url,
            dataType: "json",
            data: config.data || config.params,
            type: config.method,
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            },
        })
    })

}
export default ajax;