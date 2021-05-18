const Koa = require('koa');
const Router = require('koa-router');
const http = require('axios');
const app = new Koa();
const router = new Router();
 
const bodyparser = require('koa-bodyparser');

// ieo列表 
let ieoList = [];

app.use(bodyparser());
app.use(router.routes());//启动路由
app.use(router.allowedMethods());

http.get("https://api.github.com/repos/15573138624/ieo/contents/default.json").then(res=>{
    ieoList = JSON.parse(new Buffer.from('ewogICJJRU9MaXN0IjpbeyJhIjoxLCJiIjoyfV0KfQ==\n', 'base64').toString())
    console.log(ieoList,ieoList.length)
}).catch(e=>{
    console.error(e,'初始化ieo列表出错')
})
  
router.post('/doPost',async (ctx,next) => {
    ctx.body = ctx.request.body;//获取post传过来的参数
})
 
