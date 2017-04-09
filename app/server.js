import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 1);
}

export function getCardsInStack(stackId, cb) {
  var stack = readDocument('stacks', stackId);
  var cards = stack.cards;
  emulateServerReturn(cards, cb);
}
