// Netlify函数包装器，用于运行Express应用
const app = require('../../server');
const serverless = require('serverless-http');

// 导出Serverless处理程序
module.exports.handler = serverless(app);