import {readDocument, writeDocument, addDocument} from './database.js';
import {currentTimeToString} from './util.js';

var token = 'eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNCJ9';
/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that SmartCardError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global SmartCardError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      SmartCardError('Could not ' + verb + " " + resource + ": Received " +
		            statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    SmartCardError('Could not ' + verb + " " + resource +
	              ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    SmartCardError('Could not ' + verb + " " + resource +
		          ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function saveCard(userId, stackId, fTxt, bTxt, cb) {
    sendXHR('PUT', '/' + userId + '/createcard/' + stackId,  {
        "frontContent": fTxt,
        "backContent": bTxt
    }, (xhr) =>{
      cb(JSON.parse(xhr.responseText));
    })
}

export function saveStack(userId, name, postDate, cb) {
    sendXHR('POST', '/' + userId + '/home',  {
        "postDate": postDate,
        "name": name
    }, (xhr) =>{
      cb(JSON.parse(xhr.responseText));
    })
}

export function createStack(userId, name, cb) {
    sendXHR('POST', '/' + userId + '/home',  {
        "userId": userId,
        "name": name
    }, (xhr) =>{
      cb(JSON.parse(xhr.responseText));
    })
}
export function getCardsInStack(userId, stackId, cb) {
  sendXHR('GET', '/' + userId + '/grid/' + stackId, undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  })
}

export function getStacksFromUser(userId, cb){
  sendXHR('GET', '/' + userId + '/home', undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  })
}

export function getSettingsData(userId, cb){
  // sendXHR('GET', '/settings/' + userId, undefined, (xhr) =>{
  sendXHR('GET', '/' + userId + '/settings', undefined, (xhr) =>{ // new
    cb(JSON.parse(xhr.responseText)); // new
  })
}

export function saveSettings(userId, u, d, e, cb) {
    // sendXHR('PUT', '/settings/' + userId, {
    sendXHR('PUT', '/' + userId + '/settings', {
      // fullName: u,
      // description: d,
      // email: e
        "fullName": u,
        "description": d,
        "email": e
    }, (xhr) =>{
      cb(JSON.parse(xhr.responseText));
    })
}

export function getStackData(userId, stackId, cb) {
  sendXHR('GET', '/' + userId + '/grid/' + stackId, undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  })
}


// export function getStacksFromUser(userId, cb){
//   var userData = readDocument('users', userId);
//   var stackData = userData.stacks;
//   stackData = stackData.map((stackId) => readDocument('stacks', stackId));
//   emulateServerReturn(stackData, cb);
// }
