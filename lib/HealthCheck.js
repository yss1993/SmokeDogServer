/**
 * 健康检查类
 * Created by yu_ss on 2019-03-14 09:07
 */
const BaseModel = require('../model/BaseModel');

class HealthCheck extends BaseModel{
    constructor() {
        super();
    }

    /**
     * Mysql连接检查
     */
    checkMysqlConnection() {
        this.sequelize.authenticate()
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