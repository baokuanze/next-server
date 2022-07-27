

const router = require('koa-router')();
const NvList = require('./db_c/nvList')
const dbOperate = require('./db_c/operate')

router.get('/api/allNvList', async (ctx) => {
  let list = await dbOperate.find(NvList)
  ctx.body = {
    code: 200,
    data: {
      list
    }
  }
})

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
