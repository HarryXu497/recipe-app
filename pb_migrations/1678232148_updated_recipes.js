migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twlzndwc",
    "name": "images",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif"
      ],
      "thumbs": [
        "100x100"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yrfakurf",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0")

  // remove
  collection.schema.removeField("twlzndwc")

  // remove
  collection.schema.removeField("yrfakurf")

  return dao.saveCollection(collection)
})
