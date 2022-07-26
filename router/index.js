

const express = require('express')
const router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now(), req.query)
  next()
})

router.get('/list', function (req, res) {
  res.status(200).json({
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
        id: '7891',
        name: '7891 tests'
      }]
    }
  })
})

router.get('/details', function (req, res) {
  res.status(200).json({
    result: {
      data: '这是测试details2'
    }
  })
})

module.exports = router