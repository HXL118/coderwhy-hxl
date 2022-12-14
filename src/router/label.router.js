// 标签路由router编写
const Router = require('koa-router');

const {
    create,
    list
} = require('../controller/label.controller.js');

// 登陆校验
const {
    verifyAuth
} = require('../middleware/auth.middleware');


const labelRouter = new Router({prefix:'/label'});

// 创建
labelRouter.post('/',verifyAuth,create);
//查询
labelRouter.get('/',list);

module.exports= labelRouter;