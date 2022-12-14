
const service = require('../service/comment.service.js')
class CommentController {
    // 发布回复
    async create(ctx,next) {
        const {content,momentId} = ctx.request.body;
        const {id} = ctx.user;
        const result = await service.create(momentId,content,id);
        ctx.body = result;
    }
    // 回复评论
    async reply(ctx,next){
        const {momentId,content} =ctx.request.body;
        const {commentId} = ctx.params;
        const {id} = ctx.user;
        const result = await service.reply(momentId,content,id,commentId)
        ctx.body = result;
    }

    //修改评论
    async update (ctx,next){
        const {commentId} = ctx.params;
        const {content} = ctx.request.body;
        // ctx.body = "成功"+commentId+content;  

        const result =await service.update(commentId,content);
        ctx.body = result;
        
    }

    //删除评论
    async remove (ctx,next){
        const {commentId} = ctx.params;
        const result = await service.remove(commentId);
        ctx.body = result;
    }

    // 根据动态查询评论列表
    async list (ctx,next)  {
        const {momentId} = ctx.query;
        const result = await service.getCommentsByMomentId(momentId); 
        ctx.body = result;
    }
} 
module.exports = new CommentController();

 