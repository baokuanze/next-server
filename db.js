 const mongoose = require('mongoose')
 const DB_URL = 'mongodb+srv://bao:asdbkz1234.as@cluster0.yxcw9.mongodb.net?retryWrites=true&w=majority'
 // 开始连接
 mongoose.connect(DB_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
 // 连接对象
 const db = mongoose.connection
 db.on('error', err => {
   console.error('mongoose connect error', err)
 })
 db.once('open', () => {
   console.log('mongoose 连接成功')
 })
 module.exports = mongoose