const Koa = require('koa');
const _ = require('./router/index.js')
const mongo = require('./db')
const app = new Koa();

app.use(_.routes())

app.use(async ctx => {
  console.log(ctx, ctx.request.url)
    ctx.body = 'Hello Word @泽';
});

app.listen(3008, () => {
    console.log('3008项目启动')
});
