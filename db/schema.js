const schemaList = {
  user: {
    title: {
      type: String,
      index: true,
      default: []
    },
    children: {
      type: Array,
      required: false,
      default: []
    },
    readCount: {
      type: Number,
      default: 1
    }
  }
}

module.exports = schemaList