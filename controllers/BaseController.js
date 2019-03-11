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
}

module.exports = BaseController;