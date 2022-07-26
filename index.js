// const Koa = require('koa');
// const app = new Koa();

// app.use(async ctx => {
//     ctx.body = 'Hello Vercel, Hi Koa2';
// });

// app.listen(3008, () => {
//     console.log('3008项目启动')
// });




const express = require('express')
const Routers = require('./router/index')

//  // "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
const port = parseInt(process.env.PORT, 10) || 3002
const app = express()


app.use("/api", Routers)


app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`)
})