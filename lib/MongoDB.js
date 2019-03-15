/**
 * MongoDB检测
 * Created by yu_ss on 2019-03-13 16:39
 */
const mongoose = require('mongoose');
const config = require('../config/config').getInstance().config;
const healthCheck = require('./HealthCheck').getCheckInstance();
module.exports = () => {
    //连接mongodb
    mongoose.connect(config.mongoURL, {useNewUrlParser: true})
        .catch(err => {
            console.log(err);
        })
    //检测mongodb连接
    healthCheck.checkMongoDB()
        .then((msg) => {
            console.log(msg);
        })
        .catch((e) => {
            console.log(e);
            process.exit(1);
        })

};