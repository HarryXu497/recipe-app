migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  collection.createRule = null
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
