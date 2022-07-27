

module.exports = {
  async insert(collectionName, insertData) {
    insertData = Array.isArray(insertData) ? insertData : [insertData]
    return await collectionName.insertMany(insertData)
  },
  async find(collectionName, whereObj) {
    return await collectionName.find({})
  }
}