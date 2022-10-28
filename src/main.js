const Koa = require('koa')

// 获取config拿到的.env配置的值
const { APP_PORT } = require('./config/config.default')
// 导入路由中间件
const userRouter = require('./router/user.route')

const app = new Koa()

// 使用中间件
app.use(userRouter.routes())

// 使用config里面拿到的.env配置的值
app.listen(APP_PORT, () => {
  console.log(`server is running at http://localhost:${APP_PORT}`);
})