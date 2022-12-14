const fs = require('fs');
const fileService = require("../service/file.service");
const momentService = require("../service/moment.service");

const {PICTURE_PATH} = require('../constants/file-path')

// 发表动态成功
class MomentController{
    // 发表动态
    async create(ctx,next){
        // 1.获取数据（user_id,content）
        const userId = ctx.user.id;
        const content = ctx.request.body.content;

        //2. 将数据插入数据库
        const result = await momentService.create(userId,content);
        ctx.body= result;
        // ctx.body ="发表动态成功～";
    }

    //查询动态（单个）
    async detail(ctx,next) {
        // 1. 获取数据（momentId）
        const momentId = ctx.params.momentId;

        //2.根据id去查询这条语句
        const result = await momentService.getMomentById(momentId);

        ctx.body= result;
    }

    //查询动态（多个）
    async list (ctx,next) {
        // 1，获取数据(offer/size)
        const {offset, size} =ctx.query;

        //2.查询列表
        const result = await momentService.getMomentList(offset,size);
        ctx.body=result;
    }

    //修改动态
    async update(ctx,next) {
        // 1.获取参数
        const {momentId} = ctx.params;
        const {content} = ctx.request.body;
        // 2.修改内容
        const result = await momentService.update(content,momentId);
        ctx.body= result;
    }

    // 删除
    async remove(ctx,next){
        // 1.获取momentId
        const {momentId} = ctx.params;

        // 2. 删除内容
        const result = await momentService.remove(momentId);
        ctx.body = result;
    }

    // 给动态添加标签
    async addLabels(ctx,next) {
        // 1.获取标签和动态id
        const {labels} = ctx;
        const {momentId} = ctx.params;

        // 2.添加所有的标签
        for(let label of labels) {
            // 2.1 判断标签是否已经和动态有关系
            const isExist = await momentService.hasLabel(momentId,label.id);
            if(!isExist) {
                await momentService.addLabel(momentId,label.id);
            }
        }
        console.log(labels);
        ctx.body = "给动态添加标签～";
    }

    // 动态配图服务 fileInfo
    async fileInfo(ctx,next) {
        const {filename} = ctx.params;
        const fileInfo = await fileService.getFileByfilename(filename);
        const { type } = ctx.query;
        const types = ["small","middle","large"];
        if(types.some(item => item === type)) {
            filename = filename + '-' + type;
        }

        ctx.response.set('content-type',fileInfo.mimetype);
        ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`);

    }

}

module.exports = new MomentController();













