// 获取config拿到的.env配置的值
const { APP_PORT } = require('./config/config.default')

// 抽离koa模块后导入使用
const app = require('./app/index')

// 使用config里面拿到的.env配置的值
app.listen(APP_PORT, () => {
  console.log(`server is running at http://localhost:${APP_PORT}`);
})