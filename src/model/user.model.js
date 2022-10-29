// 导入sequelize里数据类型
const { DataTypes } = require('sequelize') 

const seq = require('../db/seq')

// 创建模型(表)ms_user  会映射出一张表为 ms_users
const User = seq.define('ms_user', {
  // 定义表字段
  // id 会呗sequelize自动创建管理
  user_name: {
    // STRING 对应表的数据类型为varchar
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名, 唯一'
  },
  password: {
    // STRING 对应表的数据类型为varchar
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    // STRING 对应表的数据类型为varchar
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '0不是管理员(默认),1是管理员'
  }
})
// sync:同步这个模型到数据库  force: true:当数据库存在这张表,则删除这张表重新创建,创建完后需要注释掉
// User.sync({ force: true })

module.exports = User