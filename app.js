/**
 * Created by yu_ss on 2019-03-11 09:15
 */
const koa = require('koa');
const app = new koa();
const koaBody = require('koa-body');
const router = require('./router/index');
const config = require('./config/config').getInstance().config;

require('./lib/HealthCheck').getCheckInstance().checkMysqlConnection();
app.use(koaBody({multipart: true}));

//路由层
router(app);

app.listen(config.port, () => {
    console.log('Server is running at port:', config.port);
});