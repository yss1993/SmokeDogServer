/**
 * 用户控制层
 * Created by yu_ss on 2019-03-11 15:13
 */
const BaseConstrller  = require('./BaseController');
const UserService = require('../services/UserService');

class UserController extends BaseConstrller {
    constructor(ctx) {
        super(ctx);
        this.userService = new UserService(ctx);
    }

    /**
     * 用户注册
     * @returns {Promise.<void>}
     */
    async userRegister() {
       let params = this._ctx.request.body;
       let addNewUser = await this.userService.userRegister(params);
        if (addNewUser[1]) {
            this.returnSuccess('用户注册成功', []);
        } else {
            this.returnError(202, '该用户已存在');
        }
    }

    /**
     * 用户登录
     * @returns {Promise.<void>}
     */
    async userLogin() {
        let params = this._ctx.request.body;
        await this.userService.userLogin(params);
    }
}

module.exports = UserController;