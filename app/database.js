import React from 'react';
import ReactDOM from 'react-dom';

var startupName = "apple";

var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "fullName": "User 1",
      "stacks": []
    },
    "2": {
      "_id": 2,
      "fullName": "User 2",
      "stacks": []
    },
    "3": {
      "_id": 3,
      "fullName": "User 3",
      "stacks": []
    },
    "4": {
      "_id": 4,
      "fullName": "User 4",
      "stacks": [1,2]
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
    }

  }
};


var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
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
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.

export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.

class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
*/
