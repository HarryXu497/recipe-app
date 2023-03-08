migrate((db) => {
  const collection = new Collection({
    "id": "xhwlpxa1ktcu0b0",
    "created": "2023-03-07 23:30:50.383Z",
    "updated": "2023-03-07 23:30:50.383Z",
    "name": "recipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hzlmys3w",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 60,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zkaqlt4z",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 400,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xhwlpxa1ktcu0b0");

  return dao.deleteCollection(collection);
})
