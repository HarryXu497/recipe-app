migrate((db) => {
  const collection = new Collection({
    "id": "zsl2proj4kvyw4p",
    "created": "2023-03-07 23:38:21.891Z",
    "updated": "2023-03-07 23:38:21.891Z",
    "name": "ingredients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "utngrhwr",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 40,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bgpcdpvh",
        "name": "amount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("zsl2proj4kvyw4p");

  return dao.deleteCollection(collection);
})
