migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-03-07 22:56:54.962Z",
      "updated": "2023-03-07 22:56:54.963Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "xhwlpxa1ktcu0b0",
      "created": "2023-03-07 23:30:50.383Z",
      "updated": "2023-03-10 22:31:37.270Z",
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
        },
        {
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
        },
        {
          "system": false,
          "id": "tb4p5250",
          "name": "author",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
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
        },
        {
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
        },
        {
          "system": false,
          "id": "7hix4q9b",
          "name": "time",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 0,
            "max": null
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "zsl2proj4kvyw4p",
      "created": "2023-03-07 23:38:21.891Z",
      "updated": "2023-03-07 23:53:47.856Z",
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
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
