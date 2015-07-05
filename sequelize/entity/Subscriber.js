/**
 * Created by 衍晴 on 2015/7/5.
 */

var Sequelize = require("sequelize");
var sequelize = require("../sequelize");

var Subscriber = sequelize.define('subscriber', {
    id: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    status :{
        type:Sequelize.INTEGER
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps:false
});

module.exports = {
    findAll:function(){
        return Subscriber.findAll({
            where:{
                email:{
                    $ne:null    // != null
                }
            }
        });
    },
    findById:function(id) {
        return Subscriber.findAll({
            where:{
                id:id
            }
        });
    },
    findByEmail:function(email) {
        return Subscriber.findAll({
            where:{
                email:email
            }
        });
    },
    createSubscriber:function(email){
        return Subscriber.create({
            email:email,
            status:1
        });
    },
    //取消订阅
    updateStatusByEmail:function(email){
        return Subscriber.update(
            {
                status:0
            },
            {
                where:{
                    email:email
                }
            }
        );
    },
    //重新订阅
    reSubscribeByEmail:function(email){
        return Subscriber.update(
            {
                status:1
            },
            {
                where:{
                    email:email
                }
            }
        );
    }
}