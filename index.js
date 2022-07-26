const Koa = require('koa');
const _ = require('koa-router')();
_.get('/list', function (ctx) {
  ctx.body = {
    result: {
      data: [{
        id: '123',
        name: '12345 test'
      }, {
        id: '456',
        name: '456 tests'
      }, {
        id: '789',
        name: '789 tests'
      }, {
        id: '789',
        name: '789 tests'
      }]
    }
  }
})

_.get('/details', function (ctx) {
  ctx.body = {
    result: {
      data: '这是测试details2'
    }
  }
})

const app = new Koa();
app.use(_.routes())

app.use(async ctx => {
  console.log(ctx, ctx.request.url)
    ctx.body = 'Hello Vercel, Hi Koa2';
});

app.listen(3008, () => {
    console.log('3008项目启动')
});




// const express = require('express')
// const Routers = require('./router/index')

// //  // "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
// const port = parseInt(process.env.PORT, 10) || 3002
// const app = express()


// app.use("/api", Routers)


// app.listen(port, () => {
//   console.log(`> Ready on http://localhost:${port}`)
// })