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
        let addNewUserRes = await this.userModel.addNewUser(params);
        return addNewUserRes;
    }

    /**
     * 用户登录逻辑层
     * @param params
     * @returns {Promise.<void>}
     */
    async userLogin(params) {
        // let dataData = await this.userModel.getAllUser();
        // console.log(dataData);
        let arr = [1, 5, 9, 52, 22];
        let target = arr.every((item) => {
            console.log(item);
            return item >= 1;
        });
        console.log(target);
    }
}

module.exports = UserService;