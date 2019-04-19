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

    async getAllUser() {
        let userData = await UserModel.findAll();
        return userData;
    }

    async addNewUser(params) {
        let addRuesult = await UserModel.findOrCreate({
            where: {username: params.username},
            defaults: {password: params.password, nickname: params.nickname, region: params.region, status: 11}
        });

        return addRuesult;
    }
}

//用户表模型定义
UserModel.init({
    id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, allowNull: false, primaryKey: true},
    username: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false},
    nickname: Sequelize.STRING,
    region: Sequelize.STRING,
    status: {type: Sequelize.INTEGER(2), allowNull: false},
    created_time: {type: Sequelize.DATE, allowNull: false},
    last_login_time: Sequelize.DATE
}, {
    sequelize,
    modelName: 'user',
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'last_login_time',
    deletedAt: false
});

module.exports = UserModel;