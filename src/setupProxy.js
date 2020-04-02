const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function(app) {
 
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8099',
    changeOrigin: true,
    pathRewrite: { //路径替换
      // '^/api3': '/api', // axios 访问/douban/v2 == target + /v2
    }
  }));
 
  app.use('/mock', createProxyMiddleware({
    target: 'http://localhost:5321',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/mock': '', // axios 访问/douban/v2 == target + /v2
    }
  }));
 
};