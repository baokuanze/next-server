
const mongoose = require('../db')
const schema = require('./schema')
const NvListSchema = mongoose.Schema(schema.user)
module.exports = mongoose.model('nvList', NvListSchema, 'nvList');
