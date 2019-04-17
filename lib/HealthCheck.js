/**
 * 健康检查类
 * Created by yu_ss on 2019-03-14 09:07
 */
const config = require('../config/config').getInstance().config;
const Sequelize = require('sequelize');

class HealthCheck {
    constructor() {
        this.mysqlOptions = config.mysql;
    }

    /**
     * Mysql连接检查
     */
    checkMysqlConnection() {
        let sequelize = new Sequelize(this.mysqlOptions);
        sequelize.authenticate()
            .then(() => {
                console.log('Connection has been connected successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            })
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