const Koa = require('koa');
const _ = require('./router.js')
// const mongo = require('./db/index.js')
const app = new Koa();

app.use(_.routes())

app.use(async ctx => {
  ctx.body = '@泽 ! ! !';
});

app.listen(3008, () => {
  console.log('3008项目启动')
});
