/**
 * 基类逻辑层
 * Created by yu_ss on 2019-03-12 14:41
 */
class BaseService {
    /**
     * 构造方法
     * @param ctx
     */
    constructor(ctx) {
        if (ctx) {
            this._ctx = ctx;
        }
    }
}

module.exports = BaseService;