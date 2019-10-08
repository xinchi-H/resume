!function () {
  var view = View('#Loading')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.removeLoading()
    },
    removeLoading: function () {
      //Loading动画结束
      setTimeout((x) => {
        this.removeClassList()
        //view.classList.remove('active')
      }, 1000)
    },
    removeClassList: function () {
      this.view.classList.remove('active')
    }
  }

  controller.init(view)

}.call()
