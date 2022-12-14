const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// const userRouter = require('../router/user.router')
// const authRouter = require('../router/auth.router')

const errHandle = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();

app.use(bodyParser());
useRoutes(app);
// app.use(userRouter.routes());
// app.use(userRouter.allowedMethods());

// app.use(authRouter.routes());
// app.use(authRouter.allowedMethods());

app.on('error',errHandle);

module.exports = app;