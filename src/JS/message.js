!function () {
    var view = View('#message')
    var model = Model({ resourceName: 'Message' })
    var controller = Controller({
        messageList: null,
        form: null,
        init: function () {
            this.model.initAV()
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessageForm')
            this.loadMessages()
        },
        loadMessages: function () {
            //获取留言
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.postMessage()
            })
        },
        postMessage: function () {
            //提交留言
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            this.model.post({ 'name': name, 'content': content }).then((message) => {
                let li = document.createElement('li')
                li.innerText = `${message.attributes.name}: ${message.attributes.content}`
                this.messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                console.log(message)
            })
        },
    })

    controller.init(view, model)

}.call()


/*
var model = {
    //初始化
    initAV: function () {
        var APP_ID = 'rJ2w8Y1EAupdFu8z942XAcT3-gzGzoHsz';
        var APP_KEY = 'aWnQJdrolJJ7uM63RvBR4QYi';
        AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    //获取数据
    fetch: function () {
        var query = new AV.Query('Message');
        return query.find()

    },
    //发送数据
    post: function (name, content) {
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.set('name', name);
        message.set('content', content);
        return message.save()
    },
}
*/

/*
    var controller = {
        view: null,
        model: null,
        messageList: null,
        form: null,
        init: function () {
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessageForm')
            this.model.initAV()
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages: function () {
            //获取留言
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.postMessage()
            })
        },
        postMessage: function () {
            //提交留言
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            this.model.post({ 'name': name, 'content': content }).then((message) => {
                let li = document.createElement('li')
                li.innerText = `${message.attributes.name}: ${message.attributes.content}`
                this.messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                console.log(message)
            })
        },

    }*/

/*
//创建TestObject表（引号内的是表名）
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是'Hello world'（数据的表头是'words'）
testObject.set('words', 'Hello world!');
// 保存；如果保存成功，则打印'保存成功。'
testObject.save().then(function (testObject) {
    console.log('保存成功。')
})
*/