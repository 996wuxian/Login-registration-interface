const { Sequelize } = require('sequelize')

// 导入.env配置的环境变量,.env由dotenv来获取,即config里的
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require('../config/config.default')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
})

// 使用authenticate测试连接
// seq.authenticate().then(()=> {
//   console.log('数据库连接成功')
// }).catch((err)=>{
//   console.log('数据库连接失败', err)
// })

module.exports = seq