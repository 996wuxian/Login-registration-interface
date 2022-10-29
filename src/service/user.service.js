// 操作数据库的
class UserService {
  // 创建用户
  async createUser(user_name, password) {
    return '写入数据库成功'
  }
}

module.exports = new UserService()