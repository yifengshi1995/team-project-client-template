// Implement your server in this file.
// We should be able to run your server with node src/server.js
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('../client/build'));
app.use(bodyParser.text());
app.use(bodyParser.json());

var database = require('./database.js');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;

/**
 * Get the user ID from a token. Returns -1 (an invalid ID)
 * if it fails.
 */
function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  } catch (e) {
    // Return an invalid ID.
    return -1;
  }
}

function saveCard(userId, stackId, fTxt, bTxt) {
  var stackItem = readDocument('stacks', stackId);
  stackItem.cards.push({
    "frontContent": fTxt,
    "backContent": bTxt
  });
  writeDocument('stacks', stackItem);

  return(stackId);
}

function saveStack(userId, name) {
  var userData = readDocument('users', userId);
  var stacksArray = readDocument('stacks');
  var stackData = userData.stacks;
  stacksArray.push({
    "_id": stacksArray.length+1,
    "postDate": currentTimeToString(),
    "name": name,
    "cards": []
  });
  userData.stacks.push(stackItem.length+1);
  writeDocument('stacks', stackItem);
  return(stackId);
}

function getCardsInStack(userId, stackId) {
  var stack = readDocument('stacks', stackId)
  var cards = stack.cards;
  return cards;
}

function getStacksFromUser(userId){
  var userData = readDocument('users', userId);
  var stackData = userData.stacks;
  stackData = stackData.map((stackId) => readDocument('stacks', stackId));
  return stackData;
}

app.get('/:userid/home', function(req, res) {
  var userid = parseInt(req.params.userid, 10);
  res.send(getStacksFromUser(userid));
});

app.get('/:userid/grid/:stackid', function(req, res) {
  var userid = parseInt(req.params.userid, 10);
  var stackid = parseInt(req.params.stackid,10);
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if (fromUser === userid){
    res.send(getCardsInStack(userid, stackid));
  }else{
    res.status(401).end();
  }
});

app.put('/:userid/createcard/:stackid', function(req, res) {
    var userid = parseInt(req.params.userid, 10);
    var stackid = parseInt(req.params.stackid,10);
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (userid === fromUser){
      res.send(saveCard(userid, stackid, body.frontContent, body.backContent));
    }else{
      res.status(401).end();
    }
});

app.put('/:userid/home', function(req, res) {
    var userid = parseInt(req.params.userid, 10);
    var stackid = parseInt(req.params.stackid,10);
    var body = req.body;
    var name = body.name;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (userid === fromUser){
      res.send(saveStack(userid, name));
    }else{
      res.status(401).end();
    }
});

// Reset database.
app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  // This is a debug route, so don't do any validation.
  database.resetDatabase();
  // res.send() sends an empty response with status code 200
  res.send();
});


/**
 * Translate JSON Schema Validation failures into error 400s.
 */
app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    // Set a bad request http response status
    res.status(400).end();
  } else {
    // It's some other sort of error; pass it to next error middleware handler
    next(err);
  }
});

// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
