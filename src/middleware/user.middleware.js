// 导入错误处理
const { userFormateError, userAlreadyExited, userDoesNotExist, userLoginError, invalidPasswordError } = require('../constant/err.type')
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

// 导入bcryptjs包
const bcrypt = require('bcryptjs')
// 加密函数
const crpytPassword = async (ctx, next) => {
  // 先拿到body里的明文密码
  const { password } = ctx.request.body
  // 生成盐加密，10次
  const salt = bcrypt.genSaltSync(10)
  // 再将salt 用哈希加密password，hash保存的是密文
  const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = hash

  await next()
}

// 验证用户登录
const verifyLogin = async (ctx, next) => {
  // 判断用户是否存在(不存在:报错)
  const { user_name, password } = ctx.request.body
  
  try {
    const res = await getUserInfo( { user_name } )

    if (!res) {
      console.error('用户名不存在', { user_name })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 比对密码是否匹配(不匹配:报错)
    // 如果这两个密码不匹配，一个是用户输入的密码，一个是数据库里的密码
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error',invalidPasswordError, ctx)
      return
    }
    await next()

  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }
}

// 导出到user,route.js里
module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin
}