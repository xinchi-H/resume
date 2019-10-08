"use strict";

!function () {
  var view = View('#Loading');
  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.removeLoading();
    },
    removeLoading: function removeLoading() {
      var _this = this;

      //Loading动画结束
      setTimeout(function (x) {
        _this.removeClassList(); //view.classList.remove('active')

      }, 1000);
    },
    removeClassList: function removeClassList() {
      this.view.classList.remove('active');
    }
  };
  controller.init(view);
}.call();