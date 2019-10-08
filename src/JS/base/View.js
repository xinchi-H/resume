//调用方法：var view = View('#message')

window.View = function (selector) {
    return document.querySelector(selector)
}