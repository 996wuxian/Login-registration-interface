const Koa = require('koa')
const { koaBody } = require('koa-body')
// 导入路由中间件
const userRouter = require('../router/user.route')

const app = new Koa()

// 使用中间件
// koa-body要在第一个使用
app.use(koaBody())
app.use(userRouter.routes())

module.exports = app