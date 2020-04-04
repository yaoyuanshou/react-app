// 用mockjs模拟生成数据
var Mock = require('mockjs');
 
// let mr = Mock.Random;//提取mock的随机对象
 
//随机id和图片
let mapData = (n) => {
  var data = [];
 
  for (var i = 1; i <= n; i++) {
 
    data.push({
      _id: i,
      title: "@ctitle(3,6)",
      time: "@date(yyyy-MM-dd)",
      img:"https://acg.xydwz.cn/gqapi/gqapi.php",
      detail:{
        desc: "@cword(3,6)",
        visit:"@url()",
        author:"@cname()"
      }
    })
  }
  return data
};
let directory = (n) => {
  var data = [];
  let detail=mapData(60)
  for (var i = 1; i <= n; i++) {
 
    data.push({
      _id: i,
      title: "@ctitle(3,6)",
      name:"@cname()",
      "count|1-100":100,
      detail:[
        ...detail
      ]
    })
  }
  return data
};
 
//json-server 要对象||函数(返回mock后的数据)
module.exports = {
 
  ...Mock.mock({
 
    'home': mapData(300),//解决 auth_icon 不随机
    'directory': directory(60),
    'banner|6': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        '_id|+1': 1,
        title: "@ctitle(3,6)",//标题型中文4到8个字
        time: "@date(yyyy-MM-dd)",
        img:"https://acg.xydwz.cn/gqapi/gqapi.php",
        detail:{
          desc: "@cword(3,6)",
          visit:"@url()",
          author:"@cname()"
        }
      }
    ],
  })
};