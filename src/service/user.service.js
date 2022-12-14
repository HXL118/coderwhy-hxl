const connection = require('../app/database')
class UserService{
    // 添加用户
    async create(user){
        const {name,password}= user;
        const statement = `INSERT INTO users (name,password) VALUES (?,?);`;

        const result = await connection.execute(statement,[name,password]);

        return result[0];
    }

    //用户名是否已被使用
    async getUserByName(name) {
        const statement =`SELECT * FROM users WHERE name =?;`;
        const result = await connection.execute(statement,[name]);

        return result[0];
    }

    //将图片地址保存到user表中
    async updateAvatarUrlByIb(avatarUrl,userId) {
        const statement =`UPDATE users SET avatar_url = ? WHERE id = ?;`;
        const [result] = await connection.execute(statement,[avatarUrl,userId]);
        return result;
    }
}

module.exports=new UserService();