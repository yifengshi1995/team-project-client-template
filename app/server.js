import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function saveCard(StackId, user, fTxt, bTxt, cb) {
  var stackItem = readDocument('stacks', StackId);
  stackItem.cards.push({
    "frontText": fTxt,
    "backText": bTxt
  });
  writeDocument('stacks', stackItem);
  emulateServerReturn(getFeedItemSync(StackId), cb);
}

export function getCardsInStack(stackId, cb) {
  var stack = readDocument('stacks', stackId);
  var cards = stack.cards;
  emulateServerReturn(cards, cb);
}

export function getUserData(userId, cb){
  var userData = readDocument('users',userId);
  emulateServerReturn(userData, cb);
}

export function getStacksFromUser(userId, cb){
  var userData = readDocument('users', userId);
  var stackData = userData.stacks;
  stackData = stackData.map((stackId) => readDocument('stacks', stackId));
  emulateServerReturn(stackData, cb);
}
