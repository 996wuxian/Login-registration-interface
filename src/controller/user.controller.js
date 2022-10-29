const { createUser } = require('../service/user.service')

class UserController {
  // 注册方法
  async register(ctx,next) {
    // 1 获取数据
    const { user_name, password } = ctx.request.body
    // 在操作数据库之前,对获取到的数据进行合法性和合理性的校验

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
  }
  // 登录方法
  async login(ctx,next) {
    ctx.body = '用户登录成功'
  }
}

module.exports = new UserController()