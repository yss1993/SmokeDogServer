/**
 * Created by yu_ss on 2019-03-11 14:17
 */
const userRoute = require('./userRoute');
const CatcnError = require('../lib/CatchError');

module.exports = (app) => {
    app.use(CatcnError.getError());
    app.use(userRoute.routes())
        .use(userRoute.allowedMethods());
};