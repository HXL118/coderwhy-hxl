// 发表动态
const Router = require('koa-router');
const momentRouter = new Router({prefix:'/moment'});

const {
    create,
    detail,
    list,
    update,
    remove,
    addLabels,
    fileInfo
} = require('../controller/moment.controller.js');
const {
    verifyAuth,
    verifyPermission
} =require("../middleware/auth.middleware")
const {
    verifyLabelExists
} =require("../middleware/label.middleware")

// 添加动态
momentRouter.post('/',verifyAuth,create);
// 多条查询
momentRouter.get('/',list);
//查看动态详情
momentRouter.get('/:momentId',detail);
// 修改动态
// 1.用户登陆，用户权限
momentRouter.patch('/:momentId',verifyAuth,verifyPermission,update);
// 删除
momentRouter.delete('/:momentId',verifyAuth,verifyPermission,remove);
// 给动态添加标签
// verifyLabelExists 验证标签是否已存在，不存在则标签表里需要添加给标签
momentRouter.post('/:momentId/labels',verifyAuth,verifyPermission,verifyLabelExists,addLabels);

//动态配图服务
momentRouter.get('/images/:filename',fileInfo);
module.exports=momentRouter;
