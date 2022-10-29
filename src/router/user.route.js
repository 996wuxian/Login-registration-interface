const Router = require('koa-router')

// 导入中间件
const { userValidator, verifyUser, crpytPassword } = require('../middleware/user.middleware')

const { register, login } = require('../controller/user.controller')

// 加上前缀
const router = new Router({ prefix: '/users' })

// 当我们去请求register这个接口时，就交由register这个函数处理
// 注册接口
// 使用合法性和合理性中间件来判断这个接口请求的数据是否合法合理
router.post('/register', userValidator, verifyUser, crpytPassword, register)

// 登录接口
router.post('/login', login)

module.exports = router