const connection= require('../app/database');

class LabelService {
    // 创建标签
    async create(name) {
        const statement = `INSERT INTO label (name) VALUES (?);`;
        const [result] = await connection.execute(statement,[name]);
        return result;
    }

    // 查询标签在label表中是否存在
    async getLabelByName(name) {
        const statement = `SELECT * FROM label WHERE name = ?;`;
        const [result] = await connection.execute(statement,[name]) ;
        return result[0];
    }

    //查询标签
    async getLabels(limit,offer) {
        const statement = `SELECT * FROM label LIMIT ?,?;`;
        const [result] = await connection.execute(statement,[offer,limit]) ;
        return result;
    }
}

module.exports = new LabelService();