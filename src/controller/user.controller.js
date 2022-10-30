const { createUser } = require('../service/user.service')

// 导入错误类型
const { userRegisterError } = require('../constant/err.type')

class UserController {
  // 注册方法
  async register(ctx,next) {
    // 1 获取数据
    const { user_name, password } = ctx.request.body
    try {
      // 2 操作数据库
      const res = await createUser(user_name, password)
      // console.log(res);
      // 3 返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        }
      }
    } catch (err) {
      console.log(err)
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }
  // 登录方法
  async login(ctx,next) {
    const { user_name } = ctx.request.body
    ctx.body = `用户${ user_name }登录成功`
  }
}

module.exports = new UserController()