const jsonServer = require('json-server');//在node里面使用json-server包
const db = require('./db.js');//引入mockjs配置模块  需要暴露一个对象
const path = require('path');
const Mock = require('mockjs');
 
let mock='/api';//定义路由根别名
let port=5321;//端口
 
//创建服务器
const server = jsonServer.create();//创建jsonserver 服务对象  ~~ express()
 
 
//配置jsonserver服务器 中间件
server.use(jsonServer.defaults({
  static:path.join(__dirname, '/public'),//静态资源托管
}));
 
server.use(jsonServer.bodyParser);//抓取body数据使用json-server中间件
 
 
//响应
server.use((request, res, next) => {//可选 统一修改请求方式
  // console.log(1)
  // request.method = 'GET';
  next();
});
 
//登录注册校验
let mr = Mock.Random;//提取mock的随机对象
server.get(mock+'/login', (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
  let username=req.query.username;
  let password=req.query.password;
  (username === 'aa' && password === 'aa123')?
    res.jsonp({//json-server返回数据的一个api而已
      "err": 0,
      "msg": "登录成功",
      "data": {
        "follow": mr.integer(1,5),
        "fans": mr.integer(1,5),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "登录失败",
    })
 
});
server.post(mock+'/reg', (req, res) => {
  let username=req.body.username;
  (username !== 'aa') ?
    res.jsonp({
      "err": 0,
      "msg": "注册成功",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "注册失败",
    })
 
});
 
//响应mock接口 自定义返回结构 定义mock接口别名
 
const router = jsonServer.router(db);//创建路由对象 db为mock接口路由配置  db==object
 
 
router.render = (req, res) => {//自定义返回结构
  let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
//   console.log(len);
 
  setTimeout(()=>{//模拟服务器延时
    res.jsonp({
      err: len >= 0 ? 0 : 1,
      msg: len >= 0 ? '成功' : '失败',
      data: res.locals.data
    })
  },1000)
 
  // res.jsonp(res.locals.data)
 
};
 
 
server.use(jsonServer.rewriter({//路由自定义别名
  [mock+"/*"]: "/$1",
  "/course_category\\?uid=:id": "/course_category/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id"
 
}));
 
server.use(router);//路由响应
 
 
 
//开启jsonserver服务
server.listen(port, () => {
  console.log('mock server is running')
});