const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const fs = require('fs');

const PRIVATE_KEY =fs.readFileSync(path.resolve(__dirname, './key/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./key/public.key'));

module.exports= {
    APP_HOST ,
    APP_PORT,
    MYSQL_HOST,
    YSQL_POST,
    YSQL_DATABASE,
    YSQL_USER,
    YSQL_PASSWORD  
} = process.env;

module.exports.PRIVATE_KEY=PRIVATE_KEY;
module.exports.PUBLIC_KEY=PUBLIC_KEY;
