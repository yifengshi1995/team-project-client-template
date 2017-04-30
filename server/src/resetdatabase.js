var ObjectID = require('mongodb').ObjectID;

var databaseName = "smartcard";
// Put the initial mock objects here.
var initialData = {
  "users": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
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
      "_id": new ObjectID("000000000000000000000002"),
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
      "_id": new ObjectID("000000000000000000000003"),
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
      "_id": new ObjectID("000000000000000000000004"),
      "fullName": "User 4",
      "memSince": "April 2017",
      "stacks": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")],
      "numStacks": 2,
      "description": "much cards such smart wow",
      "email": "xX_Apple_Xx@umass.edu",
      "password": "******",
      "visiblity": "Private"
    }
  },

  "stacks": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),

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
      "_id": new ObjectID("000000000000000000000002"),

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
      "_id": new ObjectID("000000000000000000000003"),

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
      "_id": new ObjectID("000000000000000000000004"),

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
      "_id": new ObjectID("000000000000000000000005"),

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
      "_id": new ObjectID("000000000000000000000006"),

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
      "_id": new ObjectID("000000000000000000000007"),

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

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
