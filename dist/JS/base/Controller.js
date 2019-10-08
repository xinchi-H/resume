"use strict";

//调用方法：
//var controller = Controller({
//    init: function (view, model) {
//        this.xxx()
//        this.yyy()
//    },
//   xxx: function () { },
//    yyy: function () { }, })
window.Controller = function (options) {
  var _init = options.init;
  var object = {
    view: null,
    model: null,
    init: function init(view, model) {
      this.view = view;
      this.model = model;

      _init.call(this, view, model);

      this.bindEvents.call(this);
    }
  };

  for (var key in options) {
    if (key !== 'init') {
      object[key] = options[key];
    }
  }

  return object;
};