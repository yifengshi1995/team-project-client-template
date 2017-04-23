// Your startup's initial mock objects go here
var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "fullName": "User 1",
      "memSince": "Jan 2017",
      "stacks": [],
      "numStacks": 0,
      "description": "smart cards",
      "email": "xX_Melon_Xx@umass.edu",
      "password": "******",
      "visiblity": "Private"
    },
    "2": {
      "_id": 2,
      "fullName": "User 2",
      "memSince": "Feb 2017",
      "stacks": [],
      "numStacks": 0,
      "description": "why you always stackin'",
      "email": "xX_Watermelon_Xx@umass.edu",
      "password": "******",
      "visiblity": "Private"
    },
    "3": {
      "_id": 3,
      "fullName": "User 3",
      "memSince": "March 2017",
      "stacks": [],
      "numStacks": 0,
      "description": "y u no card",
      "email": "xX_Cantaloupe_Xx@umass.edu",
      "password": "******",
      "visiblity": "Private"
    },
    "4": {
      "_id": 4,
      "fullName": "User 4",
      "memSince": "April 2017",
      "stacks": [1,2],
      "numStacks": 2,
      "description": "much cards such smart wow",
      "email": "xX_Apple_Xx@umass.edu",
      "password": "******",
      "visiblity": "Private"
    }
  },

  "stacks": {
    "1": {
      "_id": 1,

        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "name": "ugh.",

      // List of comments on the post
      "cards": [
        {
          "frontContent": "id Deckone Font Text One",
          "backContent": "Back Text One"
        },
        {
          "frontContent": "Font Text Two",
          "backContent": "Back Text Two"
        }
      ]
    },
    "2": {
      "_id": 2,

        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "name": "dont dont dont dont dont you need somebody to love",

      // List of comments on the post
      "cards": [
        {
          "frontContent": "idfasffdsbfasgafbd",
          "backContent": "sdfaargabfrgbf"
        },
        {
          "frontContent": "fbdarbfsrgbterbt",
          "backContent": "drebsertbsgnteretb"
        }
      ]
    },
    "3": {
      "_id": 3,

        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "name": "Web Programming",

      // List of comments on the post
      "cards": [
        {
          "frontContent": "Front Text 1",
          "backContent": "Back Text 1"
        },
        {
          "frontContent": "Font Text Two",
          "backContent": "Back Text Two"
        }
      ]
    },
    "4": {
      "_id": 4,

        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "name": "Dog Breeds",

      // List of comments on the post
      "cards": [
        {
          "frontContent": "Front Text One",
          "backContent": "Back Text One"
        },
        {
          "frontContent": "Front Text Two",
          "backContent": "Back Text Two"
        }
      ]
    },
    "5": {
      "_id": 5,

        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "name": "Trig Identities",

      // List of comments on the post
      "cards": [
        {
          "frontContent": "Front Text One",
          "backContent": "Back Text One"
        },
        {
          "frontContent": "Front Text Two",
          "backContent": "Back Text Two"
        }
      ]
    },
    "6": {
      "_id": 6,

        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "name": "World War II Battles",

      // List of comments on the post
      "cards": [
        {
          "frontContent": "Front Text One",
          "backContent": "Back Text One"
        },
        {
          "frontContent": "Front Text Two",
          "backContent": "Back Text Two"
        }
      ]
    },
    "7": {
      "_id": 7,

        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "name": "US Presidents",

      // List of comments on the post
      "cards": [
        {
          "frontContent": "Front Text One",
          "backContent": "Back Text One"
        },
        {
          "frontContent": "Front Text Two",
          "backContent": "Back Text Two"
        }
      ]
    }

  }
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
