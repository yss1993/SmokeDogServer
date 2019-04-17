/**
 * 基础数据库Model
 * Created by yu_ss on 2019-04-17 17:01
 */
const Sequelize = require('sequelize');
const config = require('../config/config').getInstance().config;

class BaseModel {
    constructor() {
        this.mysqlOptions = config.mysql;
        this.sequelize = new Sequelize(this.mysqlOptions);
    }
}

module.exports = BaseModel;