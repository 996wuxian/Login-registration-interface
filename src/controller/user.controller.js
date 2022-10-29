class UserController {
  // 注册方法
  async register(ctx,next) {
    ctx.body = '用户注册成功'
  }
  // 登录方法
  async login(ctx,next) {
    ctx.body = '用户登录成功'
  }
}

module.exports = new UserController()