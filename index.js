const express = require('express')
const app = express()
const port = 3003

app.get('/api/list', (req, res) => {
  res.status(200).json({
    result: {
      data: [{
        id: '123',
        name: '123 test'
      }, {
        id: '456',
        name: '456 tests'
      },  {
        id: '789',
        name: '789 tests'
      }]
    }
  })
})


app.get('/api/detail', (req, res) => {
  res.status(200).json({
    result: {
      data: '这是测试details'
    }
  })
})

app.listen(3003, () => {
  console.log(`Example app listening on port ${port}`)
})
