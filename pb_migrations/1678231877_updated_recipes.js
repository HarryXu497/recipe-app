migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tb4p5250",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // remove
  collection.schema.removeField("tb4p5250")

  return dao.saveCollection(collection)
})
