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
  stack = stack.map((stk) => readDocument("stacks", stk));
  var cards = stack.cards;
  emulateServerReturn(cards, cb);
}
/**
 * Emulates a REST call to get the feed data for a particular user.
 * @param user The ID of the user whose feed we are requesting.
 * @param cb A Function object, which we will invoke when the Feed's data is available.
 */
export function getUserData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.

  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
 // feedData.contents = feedData.contents.map(getFeedItemSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(userData, cb);
}
export function getStackData(stackId, cb) {
  // Get the User object with the id "user".
  var stackData = readDocument('stacks', stackId);
  // Get the Feed object for the user.

  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
 // feedData.contents = feedData.contents.map(getFeedItemSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(stackData, cb);
}
