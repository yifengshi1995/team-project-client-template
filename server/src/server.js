// Implement your server in this file.
// We should be able to run your server with node src/server.js
var express = require('express');
var bodyParser = require('body-parser');
var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');
var ResetDatabase = require('./resetdatabase');

var app = express();
app.use(express.static('../client/build'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use('/mongo_express', mongo_express(mongo_express_config));
var validate = require("express-jsonschema").validate;
var database = require('./database.js');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;

var UserSchema = require('./schemas/user.json');
var CardSchema = require('./schemas/card.json');
var StackSchema = require('./schemas/stack.json');

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

function saveStack(userId, name, postDate) {
  var userData = readDocument('users', userId);
  //var stacksArray = readDocument('stacks', 1);
  var newStack = {
      "postDate": postDate,
      "name": name,
      "cards": []
  }
  newStack = addDocument('stacks', newStack);
  //userData.stacks.push(stacksArray.length+1);
  return(newStack);
}

function getCardsInStack(userId, stackId) {
  var stack = readDocument('stacks', stackId)
  var stackData = {
      cards: stack.cards,
      name: stack.name,
      postDate: stack.postDate
  }
  return stackData;
}

function getStacksFromUser(userId){
  var userData = readDocument('users', userId);
  var stackData = userData.stacks;
  stackData = stackData.map((stackId) => readDocument('stacks', stackId));
  return stackData;
}

function getUserData(userId){ // for rendering settings
  var userData = readDocument('users', userId);
  return userData;
}

// function saveSettings(userId, editedU, editedD, editedE) {
//   var userData = readDocument('users', userId);
//   console.log(userData);
//   "fullName": editedU,
//   "description": editedD
//   // userData.fullName = editedU;
//   // userData.description = editedD;
//   // userData.email = editedE;
//   writeDocument('users', userData);
//   console.log(userData);
//   return(userData);
// }

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

app.get('/settings/:userid', function(req, res) {
  var userid = parseInt(req.params.userid, 10);
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if (fromUser === userid){
    res.send(getUserData(userid));
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

// saves the settings
app.put('/settings/:userid', function(req, res) {
    var userid = parseInt(req.params.userid, 10);
    var userData = readDocument('users', userid); // try
    // console.log(userData);
    var body = req.body;
    // console.log(body);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (userid === fromUser){
      userData.fullName = body.fullname; // try
      userData.description = body.description; // try
      userData.email = body.email; // try
      // console.log(userData);
      writeDocument('users', userData); // try cry
      res.send(getUserData(userid));
      // res.send(saveSettings(userid, body.fullName, body.description, body.email));
    }else{
      res.status(401).end();
    }
});

app.post('/:userid/home', function(req, res) {
    var userid = parseInt(req.params.userid, 10);
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (userid === fromUser){
        var newStack = saveStack(userid, body.name, body.postDate);
        res.status(201);
        res.set('Location', '/home/' + newStack._id);
        res.send(newStack);
    }else{
      res.status(401).end();
    }
});

// Reset database.
app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  ResetDatabase(db, function() {
    res.send();
  });
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
