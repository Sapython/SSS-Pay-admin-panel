import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const readTransaction = functions.firestore.document('users/transaction').onWrite((change, context) => {
  console.log(change.after.data());
}); 

exports.addMessage = functions.https.onCall((data, context) => {
  console.log('data',data);
  if(data.verifications.app != "MISSING" && data.verifications.auth != "MISSING"){

  }
});