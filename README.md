# Problem Statement
- Write a function that receives a large batch of card events from multiple cards,
returning an object which maps from cardId -> valid transaction. 
- Only cardIds with a valid transaction should appear in the returned object.
- A valid transaction is a pair of card events, starting with a RESERVATION event and finishing with either a CONFIRMATION or CANCELLATION event.
- The input is an array of unprocessed card events. Some events might be duplicated
or missing. For duplicated events, you may only use one of its occurrences and discard the rest. Missing events invalidate the transaction.

# code file
-function.js

## steps to run
-use for loop to iterate on array.
-while iterating create empty object and put all elements in object
-then check duplicate key in object
