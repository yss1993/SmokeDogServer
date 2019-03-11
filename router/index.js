/**
 * Created by yu_ss on 2019-03-11 14:17
 */
const userRoute = require('./userRoute');

module.exports = (app) => {
    app.use(userRoute.routes())
        .use(userRoute.allowedMethods());
};