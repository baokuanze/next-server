

// const express = require('express')
// const router = express.Router()

// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now(), req.query)
//   next()
// })

// router.get('/list', function (req, res) {
//   res.status(200).json({
//     result: {
//       data: [{
//         id: '123',
//         name: '12345 test'
//       }, {
//         id: '456',
//         name: '456 tests'
//       }, {
//         id: '789',
//         name: '789 tests'
//       }, {
//         id: '789',
//         name: '789 tests'
//       }]
//     }
//   })
// })

// router.get('/details', function (req, res) {
//   res.status(200).json({
//     result: {
//       data: '这是测试details2'
//     }
//   })
// })




const router = require('koa-router')();

router.get('/list', function (ctx) {
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

router.get('/details', function (ctx) {
  ctx.body = {
    result: {
      data: '这是测试details2'
    }
  }

})


module.exports = router
