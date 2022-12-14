//  权限查询
const connection= require('../app/database')

class AuthService{
    // async checkMoment(monentId,userId) {
    //     const statement = `SELECT * FROM moment WHERE id = ? AND user_id =?;`;
    //     const [result] = await connection.execute(statement,[monentId,userId]);
    //     return result.length === 0? false:true;
    // }
    //  封装后
    async checkResource(tableName,monentId,userId) {
        const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id =?;`;
        const [result] = await connection.execute(statement,[monentId,userId]);
        return result.length === 0? false:true;
    }

}
 
module.exports= new AuthService();