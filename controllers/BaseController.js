/**
 * 基类控制层
 * Created by yu_ss on 2019-03-11 15:13
 */

class BaseController {
    constructor(ctx) {
        if (ctx) {
            this._ctx = ctx;
        }
    }

    /**
     * 成功返回
     * @param data
     */
    returnSuccess(data) {
        let successObj = {
            code: 200,
            msg: '',
            data
        };
        this._ctx.body = successObj;
    }

    /**
     * 错误返回
     * @param code 错误码
     * @param error 错误提示
     */
    returnError(code, errorMsg) {
        let errorObj = {
            code,
            msg: errorMsg,
            data: ''
        };
        this._ctx.body = errorObj;
    }
}

module.exports = BaseController;