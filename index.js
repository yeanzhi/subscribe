/**
 * Created by 衍晴 on 2015/7/5.
 */

var koa          = require('koa');
var router       = require('koa-route');
var Promise      = require('bluebird');
var fs           = Promise.promisifyAll(require('fs'));
var app          = koa();

var Subscriber = require("./sequelize/entity/Subscriber");

//骂了隔壁的 post怎么获取参数!?
app.use(router.post('/subscribe', function *() {
    //获取参数
}));

app.use(router.get('/subscribe/:email', function *(email) {
    var theone = yield Subscriber.findByEmail(email);
    if(theone.length > 0) {
        //此前取消订阅, 则重新激活
        if(theone[0].status == 0) {
            var result = yield Subscriber.reSubscribeByEmail(email);
            if(result>0) {
                this.body = "重新订阅成功";
            }
            else{
                this.body = "Error";
            }
        }
        else{
            this.body = "此邮箱已经订阅";
        }
    }
    else{
        var result = yield Subscriber.createSubscriber(email);
        if(result.length>0) {
            this.body = "订阅成功";
        }
        else{
            this.body = "Error";
        }
    }
}));

app.use(router.get('/unsubscribe/:email',function*(email){
    var theone = yield Subscriber.findByEmail(email);
    if(theone.length == 0) {
        this.body = " <a href='/index.html'>返回主页</a>" + "该邮箱尚没有订阅";
    }
    else{
        var result = yield Subscriber.updateStatusByEmail(email);
        if(result>0) {
            this.response.redirect("/unsubscribe.html","");
        }
        else{
            this.body = "Error";
        }
    }
}));

app.use(router.get("/src/img/:name",function*(name) {
    this.response.contentType = "image/gif";

    this.response.body = yield fs.readFileAsync("." + this.url);
}));

app.use(function*(){
    this.response.body = yield fs.readFileAsync("."+this.url,"utf-8");
});

app.listen(8090,function(){
    console.log("127.0.0.1:8090");
});