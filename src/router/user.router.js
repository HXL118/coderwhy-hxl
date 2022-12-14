// 注册路由router编写
const Router = require('koa-router');
const userRouter = new Router({prefix:'/users'});

const {
    create ,
    avatarInfo
}= require('../controller/user.controller')

const {
    verifyUser,
    handlePassword
}= require('../middleware/user.middleware')

//注册接口 先判断verifyUser ，handlePassword进行拦截对用户加密  最后注册create
userRouter.post('/',verifyUser,handlePassword,create);
userRouter.get('/:userId/avatar',avatarInfo);

module.exports=userRouter;   