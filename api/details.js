export default function handler(req, res) {
  res.status(200).json({
    result: {
      data: [{
        id: '123',
        name: '123 test'
      }, {
        id: '456',
        name: '456 tests'
      }, {
        id: '789',
        name: '789 tests'
      }]
    }
  })
}
