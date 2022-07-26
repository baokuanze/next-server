

const express = require('express')
const Routers = require('./router/index')


const port = parseInt(process.env.PORT, 10) || 3002
const app = express()


app.use("/api", Routers)


app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`)
})