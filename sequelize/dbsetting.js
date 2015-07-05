/**
 * Created by ÑÜÇç on 2015/7/5.
 */

module.exports = {
    mysql:{
        host:"210.30.100.93",
        user:"zhouzhi",
        password:'ximing002',
        port:"3306",
        database:"zhouzhidb",
        connectionLimit:10,
        charset:"utf8",
        dialect: "postgres",
      pool: {
        "max": 100,
        "min": 0,
        "idle": 10000
      }
    }
};