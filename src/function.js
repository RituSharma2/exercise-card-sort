/**
 * Write a function that receives a large batch of card events from multiple cards,
 * returning an object which maps from cardId -> valid transaction. Only cardIds with
 * a valid transaction should appear in the returned object.
 *
 * A valid transaction is a pair of card events, starting with a RESERVATION event
 * and finishing with either a CONFIRMATION or CANCELLATION event.
 *
 * The input is an array of unprocessed card events. Some events might be duplicated
 * or missing. For duplicated events, you may only use one of its occurrences and
 * discard the rest. Missing events invalidate the transaction.
 *
 * @param cardEvents CardEvent[] List of card events
 * @returns CardTransactionMapping Valid transactions grouped by cardId
 */
 const cardEventsFromDifferentCards  = [
    {
      amount: 11111,
      cardId: 'ALICE',
      id: '71ff84a1-8d6e-4f44-b74c-310dbde877de',
      type: 'RESERVATION',
    },
    {
      amount: 11111,
      cardId: 'ALICE',
      id: '0a646991-4898-4751-8bf6-c266a6728885',
      type: 'CONFIRMATION',
    },
  
    {
      amount: 22222,
      cardId: 'BOB',
      id: '2ace1ea9-b57e-4d0c-926c-d570450d17c6',
      type: 'RESERVATION',
    },
    {
      amount: 22222,
      cardId: 'BOB',
      id: '98d4608c-862a-4b46-9839-2faa30a65d30',
      type: 'CANCELLATION',
    },
  ]
  function processCards(data){
      let obj={}
    
   for(let i=0;i<=cardEventsFromDifferentCards.length;i++){
    obj[cardEventsFromDifferentCards[i].cardId]=[cardEventsFromDifferentCards[i]]
    console.log(obj)
    
   }//idea behind code is first loop through and put in object then check duplicate key.
   
 // for(let i=0;i<=JSON.stringify(cardEventsFromDifferentCards).length;i++){
   //   for(let j=1;j<=JSON.stringify(cardEventsFromDifferentCards).length;j++){
      //    if(cardEventsFromDifferentCards[i].cardId==cardEventsFromDifferentCards[j].cardId){
           //   if(cardEventsFromDifferentCards[i].type!=cardEventsFromDifferentCards[j].type){
             //   obj[cardEventsFromDifferentCards[i].cardId]=[cardEventsFromDifferentCards[i]] 
          //   }
       //   }
   //   } console.log(obj)
//  }
   
  }