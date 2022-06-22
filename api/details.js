export default function handler(req, res) {
  res.status(200).json({
    result: {
      data: '这是测试details'
    }
  })
}

