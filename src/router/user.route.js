const Router = require('koa-router')

// 加上前缀
const router = new Router({ prefix: '/users' })

router.get('/', (ctx, next) => {
  ctx.body = 'hello'
})

module.exports = router