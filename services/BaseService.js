/**
 * 基类逻辑层
 * Created by yu_ss on 2019-03-12 14:41
 */
const crypto = require('crypto');

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

    /**
     * 加密字符串
     * @param str 要加密的字符串
     * @param hashType 加密类型
     * @returns {Function}
     */
    createHash(hashType) {
        return function (str) {
            return crypto.createHash(hashType)
                .update(str)
                .digest('hex');
        }
    }
}

module.exports = BaseService;