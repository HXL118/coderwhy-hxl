const Router = require('koa-router');


const {
    verifyAuth,
    verifyPermission
} = require('../middleware/auth.middleware');
const {
    create,
    reply,
    update,
    remove,
    list
} = require('../controller/comment.controller.js')


const commentRouter = new Router({prefix:'/comment'});

// 发布评论
commentRouter.post('/',verifyAuth,create);
// 恢复评论
commentRouter.post('/:commentId/reply',verifyAuth,reply);

// 修改评论
// 封装
// 第一种
// commentRouter.patch('/:commentId',verifyAuth,verifyPermission("tag"),update);
// 第二种
commentRouter.patch('/:commentId',verifyAuth,verifyPermission,update);

//删除评论
commentRouter.delete('/:commentId',verifyAuth,verifyPermission,remove);


//根据动态查询评论
commentRouter.get('/',list);



module.exports= commentRouter;