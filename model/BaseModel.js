/**
 * 基础数据库Model
 * Created by yu_ss on 2019-04-17 17:01
 */
const Sequelize = require('sequelize');
const config = require('../config/config').getInstance().config;

class BaseModel {
    constructor() {
        let db = config.db.yangou;
        let mysqlOption = config[db];
        this.sequelize = new Sequelize(mysqlOption);
    }
}

module.exports = BaseModel;