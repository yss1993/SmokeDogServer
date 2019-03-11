/**
 * Created by yu_ss on 2019-03-11 09:15
 */
const koa = require('koa');
const app = new koa();

app.listen(8888, () => {
    console.log('Server is running at port 8888');
});