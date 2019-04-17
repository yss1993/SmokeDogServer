/**
 * 用户路由
 * Created by yu_ss on 2019-03-11 14:17
 */
const router = require('koa-router')();
const UserController = require('../controllers/UserController');

//登录
router.get('/api/login', async ctx => {
    await new UserController(ctx).userLogin();
});

//注册
router.post('/api/register', async ctx => {
    await new UserController(ctx).userRegister()
});

module.exports = router;