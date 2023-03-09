migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fpys45zv",
    "name": "time",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // remove
  collection.schema.removeField("fpys45zv")

  return dao.saveCollection(collection)
})
