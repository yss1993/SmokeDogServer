/**
 * 表user模型
 * Created by yu_ss on 2019-04-18 14:52
 */
const Sequelize = require('sequelize');
const BaseModel = require('./BaseModel');
const sequelize = require('../lib/HealthCheck').getCheckInstance().getMysqlConnection();

class UserModel extends BaseModel {
    constructor() {
        super();
    }
}

UserModel.init({
    id: {type: Sequelize.STRING, primaryKey: true},
    username: Sequelize.STRING,
    password: Sequelize.STRING
}, {sequelize, modelName: 'user', timestamps: false});

module.exports = UserModel;