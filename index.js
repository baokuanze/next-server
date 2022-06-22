// const express = require('express')
// const app = express()
// const port = 3003

// app.get('/list', (req, res) => {
//   res.status(200).json({
//     result: {
//       data: [{
//         id: '123',
//         name: '123 test'
//       }, {
//         id: '456',
//         name: '456 tests'
//       },  {
//         id: '789',
//         name: '789 tests'
//       }]
//     }
//   })
// })


// app.get('/detail', (req, res) => {
//   res.status(200).json({
//     result: {
//       data: '这是测试details'
//     }
//   })
// })

// app.listen(3003, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;