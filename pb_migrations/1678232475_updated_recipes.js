migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d2hnb75l",
    "name": "ingredients",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "zsl2proj4kvyw4p",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // remove
  collection.schema.removeField("d2hnb75l")

  return dao.saveCollection(collection)
})
