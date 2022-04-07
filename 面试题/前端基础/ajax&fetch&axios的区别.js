/**
 * 三者都用于网络请求，但是不同维度
 * Ajax，一种技术统称
 * Fetch，一个具体的API
 * Axios，第三方库
 */

// 使用XML实现Ajax
function ajax(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, false) // 同步
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText)
            }
        }
    }
    xhr.send(null)
}

// fetch
/**
 * fetch是浏览器原生API，用于网络请求
 * 和XMLHttpRequest是一个级别的
 * Fetch语法更加简洁、易用、支持Promise
 */
function ajax_fetch(url) {
    return fetch(url).then(res => res.json())
}

// Axios
/**
 * 最常用的网络请求lib
 * 内部可以使用XMLHTTPRequest和fetch实现
 * 第三方库
 */

// lib和API的区别
// API是原生的函数