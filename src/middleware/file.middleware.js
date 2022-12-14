const Multer = require('koa-multer');
const Jimp = require('jimp');
const {AVATAR_PATH,PICTURE_PATH} = require('../constants/file-path');
const path = require('path');

const avatarUpload = Multer({
    dest:AVATAR_PATH
});

const avatarHandler = avatarUpload.single('avatar');

const pictureUpload = Multer({
    dest:PICTURE_PATH
});

//最多上传九个
const pictureHandle = pictureUpload.array('picture',9);

const pictureResize = async(ctx,next) => {
    console.log(1);
    // 1.获取所有图像信息
    const files = ctx.req.files;
    // 2. 对图片进行处理（sharp/jimp）

        for(let file of files) {
            const destPath = path.join(file.destination, file.filename);
            console.log(file);
            Jimp.read(file.path).then(image=> {
                image.resize(1280,Jimp.AUTO).write(`${destPath}-large`);
                image.resize(640,Jimp.AUTO).write(`${destPath}-middle`);
                image.resize(320,Jimp.AUTO).write(`${destPath}-small`);
            })
        }
    await next();
}

module.exports={
    avatarHandler,
    pictureHandle,
    pictureResize
}