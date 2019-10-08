"use strict";

!function () {
  //给data-x添加offset类
  var specialTags = document.querySelectorAll('[data-x]');

  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
  }

  setTimeout(function () {
    findClosestAndRemoveOffSet();
  }, 1000);
  window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffSet();
  });
  /*helper*/

  function findClosestAndRemoveOffSet() {
    //根据页面位置高亮导航栏
    var specialTags = document.querySelectorAll('[data-x]');
    var minIndex = 0;

    for (var _i = 1; _i < specialTags.length; _i++) {
      if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = _i;
      }
    }

    specialTags[minIndex].classList.remove('offset'); //离窗口顶部最近的元素移除offset

    var id = specialTags[minIndex].id;
    var a = document.querySelector('a[href="#' + id + '"]');
    var li = a.parentNode;
    var brothersAndMe = li.parentNode.children;

    for (var _i2 = 0; _i2 < brothersAndMe.length; _i2++) {
      brothersAndMe[_i2].classList.remove('highLight');
    }

    li.classList.add('highLight');
  }
}.call();