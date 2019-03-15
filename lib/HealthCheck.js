/**
 * 健康检查类
 * Created by yu_ss on 2019-03-14 09:07
 */
const config = require('../config/config').getInstance().config;
const mongoose = require('mongoose');

class HealthCheck {
    /**
     * MongoDB连接检查
     */
    checkMongoDB() {
        return new Promise((resolve, reject) => {
            let mongoInstance = mongoose.connection;
            mongoInstance.once('open', () => {
                resolve('mongodb\'s connection is ok');
            });
            mongoInstance.on('error', (msg) => {
                reject('mongodb\'s connection is error');
            });
        });
    }
}

//健康检查实例
let healthCheckInstance = null;

module.exports.getCheckInstance = () => {
    if (!healthCheckInstance) {
        healthCheckInstance = new HealthCheck();
    }
    return healthCheckInstance;
};