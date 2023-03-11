migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zsl2proj4kvyw4p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0kvrnrhp",
    "name": "units",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zsl2proj4kvyw4p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0kvrnrhp",
    "name": "units",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 20,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
