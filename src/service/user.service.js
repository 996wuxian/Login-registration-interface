const User = require('../model/user.model')

// 操作数据库的
class UserService {
  // 创建用户
  async createUser(user_name, password) {
    // 插入数据
    // User.create({
      // 前面为表的字段: 值为传过来的值
      // user_name: user_name,
      // password: password
    // })
    // 简写
    // await 表达式: promise对象的值,即async的值
    const res = await User.create({ user_name, password })

    return res.dataValues
  }
  // 查询用户
  async getUserInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {}

    // 短路运算
    // 当前者不为空时,执行后面代码,将{ } 里的属性通过assign方法拷贝到whereOpt里
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    // 获得它找到的第一个条目
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      // where条件
      where: whereOpt
    })

    return res ? res.dataValues : null
  }
}

module.exports = new UserService()