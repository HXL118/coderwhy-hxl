const Router = require('koa-router');

const {
    verifyAuth
} = require('../middleware/auth.middleware');

const {
    avatarHandler,
    pictureHandle,
    pictureResize
} = require('../middleware/file.middleware');

const {
    saveAvatarInfo,
    savePictureInfo
} = require('../controller/file.controller');

const fileRouter = new Router({prefix:'/upload'});

//上传头像   中间件  1、保存图片  2、控制器（保存图像的信息）
fileRouter.post('/avatar',verifyAuth,avatarHandler,saveAvatarInfo);
// 动态上传配图  中间件  1、保存图片  2、图片质量 3、控制器（保存图像的信息） 
fileRouter.post('/picture',verifyAuth,pictureHandle,pictureResize,savePictureInfo);

module.exports = fileRouter;