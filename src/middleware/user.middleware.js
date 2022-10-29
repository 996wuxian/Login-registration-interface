// 导入错误处理
const { userFormateError, userAlreadyExited } = require('../constant/err.type')
// 校验合法性
const userValidator = async (ctx, next) => {

  const { user_name, password } = ctx.request.body
  // 合法性:
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    // ctx.status = 400
    // ctx.body = {
    //   code: '10001',
    //   message: '用户名或密码为空',
    //   result: ''
    // }
    // 提交一个错误,用emit提交
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  // 如果处理完没出错,则交给下一个中间件继续处理
  await next()
}

// 校验合理性
const { getUserInfo } = require('../service/user.service')
const verifyUser = async (ctx, next) => {

  const { user_name } = ctx.request.body
  
  try {
    const res = await getUserInfo({ user_name })
    if (res) {
      console.error('用户名已经存在', {user_name})
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }

  await next()
}

// 导出到user,route.js里
module.exports = {
  userValidator,
  verifyUser
}