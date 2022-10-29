// 错误处理
// 导出到中间件的错误返回部分
module.exports = {
  userFormateError: {
    code: '10001',
    message: '用户名或密码为空',
    result: ''
  },
  userAlreadyExited: {
    code: '10002',
    message: '用户已经存在',
    result: ''
  }
}