!function () {
    var view = View('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            //var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                    //view.classList.add('sticky')
                } else {
                    this.deactive()
                    //view.classList.remove('sticky')
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }

    controller.init(view)

}.call()