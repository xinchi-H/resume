!function () {
    //给data-x添加offset类
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    setTimeout(function () { findClosestAndRemoveOffSet() }, 1000);

    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffSet()
    })

    /*helper*/
    function findClosestAndRemoveOffSet() {
        //根据页面位置高亮导航栏
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')//离窗口顶部最近的元素移除offset
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highLight')
        }
        li.classList.add('highLight')
    }
}.call()