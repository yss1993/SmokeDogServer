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
        this._ctx = ctx;
        this.userModel = new UserModel();
    }

    /**
     * 用户注册逻辑层
     * @param params
     * @returns {Promise.<void>}
     */
    async userRegister(params) {
        let sha256TypeHash = this.createHash('SHA256');
        params.password = sha256TypeHash(params.password);
        return await this.userModel.addNewUser(params);
    }

    /**
     * 用户登录逻辑层
     * @param params
     * @returns {Promise.<void>}
     */
    async userLogin(params) {
        let userData = await this.userModel.getSpecifyUser(params);
        //用户不存在
        if (!userData) {
            return false;
        }
        //密码比对
        let sha256TypeHash = this.createHash('SHA256');
        if (sha256TypeHash(params.password) === userData.password) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = UserService;