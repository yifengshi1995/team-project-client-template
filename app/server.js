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
