const dotenv = require('dotenv')
// 就会将.env里面的内容拿到这个js文件里
dotenv.config()

// 例如
// console.log(process.env.APP_PORT)
// process是代表当前执行的进程,env即获取到的环境变量
module.exports = process.env