const Router = require('koa-router')

const { register, login } = require('../controller/user.controller')

// 加上前缀
const router = new Router({ prefix: '/users' })

// 当我们去请求register这个接口时，就交由register这个函数处理
// 注册接口
router.post('/register', register)

// 登录接口
router.post('/login', login)

module.exports = router