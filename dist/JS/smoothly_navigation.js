"use strict";

!function () {
  var view = View('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    init: function init(view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function initAnimation() {
      //页面跳转动画
      // Setup the animation loop.
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var aTags = this.view.querySelectorAll('nav.menu > ul > li > a');

      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault();
          var a = x.currentTarget;
          var href = a.getAttribute('href');
          var element = document.querySelector(href);

          _this.scrollToElement(element);
        };
      }
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop;
      var currentTop = window.scrollY;
      var targetTop = top - 120;
      var s = targetTop - currentTop; //路程

      var t = Math.abs(s / 100 * 300); //时间

      if (t > 500) {
        t = 500;
      }

      var coords = {
        y: currentTop
      }; //起始位置

      var tween = new TWEEN.Tween(coords) //起始位置
      .to({
        y: targetTop
      }, t) // 结束位置 和 时间
      .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
      .onUpdate(function () {
        window.scrollTo(0, coords.y);
      }).start(); //window.scrollTo(0, top - 80)
    }
  };
  controller.init(view);
}.call();
/*
let a = x.currentTarget
let href = a.getAttribute('href')
let element = document.querySelector(href)
let top = element.offsetTop
//上面四句可以合并为let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTOP
*/