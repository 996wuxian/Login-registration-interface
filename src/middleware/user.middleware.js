// 导入错误处理
const { userFormateError, userAlreadyExited } = require('../consitant/err.type')
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
  // 合理性
  // 如果存在用户,则
  if (getUserInfo({ user_name })) {
    ctx.app.emit('error', userAlreadyExited, ctx)

    // 409 代表冲突
    // ctx.status = 409
    // ctx.body = {
    //   code: '10002',
    //   message: '用户已经存在',
    //   result: ''
    // }
    return
  }
  await next()
}

// 导出到user,route.js里
module.exports = {
  userValidator,
  verifyUser
}