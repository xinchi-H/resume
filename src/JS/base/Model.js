//调用方法：var model = Model({ resourceName: 'Message' })
//this.model.initAV()
//this.model.fetch()
//this.model.post({ 'name': name, 'content': content })

window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        //初始化
        initAV: function () {
            var APP_ID = 'rJ2w8Y1EAupdFu8z942XAcT3-gzGzoHsz';
            var APP_KEY = 'aWnQJdrolJJ7uM63RvBR4QYi';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        //获取数据
        fetch: function () {
            var query = new AV.Query(resourceName);
            var now = new Date();
            query.lessThan('createdAt', now); // 查询今天之前的数据
            query.limit(10);  // 最多返回10条结果
            query.descending('createdAt');
            return query.find()
        },
        //发送数据
        post: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            x.set('name', object.name);
            x.set('content', object.content);
            return x.save()
        },
    }
}



