// 登陆路由router编写
const Router = require('koa-router');
const autoRouter = new Router();

// 登陆成功
const {
    login,
    success
} = require('../controller/auth.controller');

// 登陆校验
const {
    verifyLogin,
    verifyAuth
} = require('../middleware/auth.middleware');

autoRouter.post('/login',verifyLogin,login);

autoRouter.get('/test',verifyAuth,success)

module.exports= autoRouter;