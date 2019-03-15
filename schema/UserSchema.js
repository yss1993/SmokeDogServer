/**
 * 用户Schema
 * Created by yu_ss on 2019-03-14 14:38
 */
const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: String,   //用户名
    password: String,
    role: Number,   //用户角色
    level: Number,   //等级
    balance: Number, //账户余额
    accumulate: Number //充值累计金额
});

let UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;