/**
 * 基础数据库Model
 * Created by yu_ss on 2019-04-17 17:01
 */
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class BaseModel extends Model{}

module.exports = BaseModel;