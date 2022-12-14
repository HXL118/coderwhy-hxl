const crypto = require('crypto');

const md5passeord = (password) => {
    // 采用md5加密方式
    const md5 = crypto.createHash('md5');
    // hex 十六进制
    const result  = md5.update(password).digest('hex');
    return result;
}

module.exports = md5passeord