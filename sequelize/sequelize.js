/**
 * Created by ÑÜÇç on 2015/7/5.
 */

var db = require("./dbsetting");
var Sequelize = require("sequelize");
//ÊµÀý»¯
var sequelize = new Sequelize(db.mysql.database,db.mysql.user,db.mysql.password,{
    host:db.mysql.host,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize;