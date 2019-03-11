/**
 * Created by yu_ss on 2019-03-11 09:15
 */
const koa = require('koa');
const app = new koa();
const koaBody = require('koa-body');
const router = require('./router/index');

app.use(koaBody({multipart: true}));

//路由层
router(app);

app.listen(8888, () => {
    console.log('Server is running at port 8888');
});