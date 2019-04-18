/**
 * 用户逻辑层
 * Created by yu_ss on 2019-03-12 14:42
 */
const BaseService = require('./BaseService');
const UserModel = require('../model/UserModel');

class UserService extends BaseService {
    /**
     * 构造方法
     * @param ctx
     */
    constructor(ctx) {
        super(ctx);
        this.userModel = new UserModel();
    }

    /**
     * 用户注册逻辑层
     * @param params
     * @returns {Promise.<void>}
     */
    async userRegister(params) {
        console.log(params);
    }

    /**
     * 用户登录逻辑层
     * @param params
     * @returns {Promise.<void>}
     */
    async userLogin(params) {
        console.log(params);
    }

}

module.exports = UserService;