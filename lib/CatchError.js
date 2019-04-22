/**
 * Created by yu_ss on 2019-04-22 15:44
 */
class CatchError {
    /**
     * 捕捉错误中间件
     * @returns {Function}
     */
    static getError() {
        return async function(ctx, next) {
            try {
                await next();
            } catch(err) {
                console.log('middle catch error:',err);
                ctx.body = {code: 500, msg: err.toString(), data: []};
            }
        }
    }
}

module.exports = CatchError;