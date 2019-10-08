"use strict";

!function () {
  var view = View('nav.menu');
  var controller = {
    view: null,
    li: null,
    init: function init(view) {
      //选择导航栏时的动画
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var liTags = this.view.querySelectorAll('nav.menu > ul > li');

      for (var i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
          var li = x.currentTarget;

          _this.addClassList(li); //li.classList.add('active')

        };

        liTags[i].onmouseleave = function (x) {
          var li = x.currentTarget;

          _this.removeClassList(li); //li.classList.remove('active')

        };
      }
    },
    addClassList: function addClassList(li) {
      li.classList.add('active');
    },
    removeClassList: function removeClassList(li) {
      li.classList.remove('active');
    }
  };
  controller.init(view);
}.call();