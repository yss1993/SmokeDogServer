/**
 * 用户控制层
 * Created by yu_ss on 2019-03-11 15:13
 */
const BaseConstrller  = require('./BaseController');

class UserController extends BaseConstrller {
    constructor(ctx) {
        super(ctx);
    }

    //用户登录
    async userLogin() {
        console.log(this._ctx.request.query);
    }

    //用户注册
    async userRegister() {
        console.log(this._ctx.request.body);
    }
}

module.exports = UserController;