!function () {
    var view = View('nav.menu')
    var controller = {
        view: null,
        li: null,
        init: function (view) {    //选择导航栏时的动画
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            let liTags = this.view.querySelectorAll('nav.menu > ul > li')
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = (x) => {
                    let li = x.currentTarget
                    this.addClassList(li)    //li.classList.add('active')
                }
                liTags[i].onmouseleave = (x) => {
                    let li = x.currentTarget
                    this.removeClassList(li)    //li.classList.remove('active')
                }
            }
        },
        addClassList: function (li) {
            li.classList.add('active')
        },
        removeClassList: function (li) {
            li.classList.remove('active')
        },
    }

    controller.init(view)

}.call()