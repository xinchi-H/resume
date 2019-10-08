//调用方法：
//var controller = Controller({
//    init: function (view, model) {
//        this.xxx()
//        this.yyy()
//    },
//   xxx: function () { },
//    yyy: function () { }, })

window.Controller = function (options) {
    var init = options.init
    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            init.call(this, view, model)
            this.bindEvents.call(this)
        },
    }
    for (let key in options) {
        if (key !== 'init') {
            object[key] = options[key]
        }
    }
    return object
}