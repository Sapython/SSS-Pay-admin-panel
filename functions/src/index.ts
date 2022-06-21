import * as functions from "firebase-functions";
import {RuntimeOptions} from "firebase-functions";
// import * as admin from "firebase-admin";
import * as http from 'http';
// admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const readTransaction = functions.
// firestore.document("users/transaction").onWrite((change, context) => {
//   console.log(change.after.data());
// });

const runTimeOpts:RuntimeOptions = {
  vpcConnector: "ssspay-connector",
  vpcConnectorEgressSettings: "ALL_TRAFFIC"
};

exports.addMessage2 = functions.region('asia-south1').runWith(runTimeOpts).https.onRequest(async (request, response) => {
      // functions.logger.log("data", request);
      http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
        resp.on('data', function(ip) {
          response.send("My public IP address is: " + ip);
        });
      });
    });
