const Koa = require('koa')
const { koaBody } = require('koa-body')

// 导入错误处理
const errHandler = require('./errHandler')

// 导入路由中间件
const userRouter = require('../router/user.route')

const app = new Koa()

// 使用中间件
// koa-body要在第一个使用
app.use(koaBody())
app.use(userRouter.routes())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app