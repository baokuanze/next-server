

const router = require('koa-router')();
router.get('/api/list', function (ctx) {
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

router.get('/api/details', function (ctx) {
  ctx.body = {
    result: {
      data: '这是测试details2'
    }
  }
})

module.exports = router
