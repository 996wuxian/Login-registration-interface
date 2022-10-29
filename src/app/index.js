const Koa = require('koa')

// 导入路由中间件
const userRouter = require('../router/user.route')

const app = new Koa()

// 使用中间件
app.use(userRouter.routes())

module.exports = app