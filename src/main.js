const Koa = require('koa')

// 获取config拿到的.env配置的值
const { APP_PORT } = require('./config/config.default')

const app = new Koa()

app.use((ctx,next) => {
  ctx.body = 'hello'
})

// 使用config里面拿到的.env配置的值
app.listen(APP_PORT, () => {
  console.log(`server is running at http://localhost:${APP_PORT}`);
})