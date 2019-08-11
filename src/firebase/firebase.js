import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCE2QmC5bBwpdp1ggXsx6R4-BJToTuihzQ",
  authDomain: "tlci-18eed.firebaseapp.com",
  databaseURL: "https://tlci-18eed.firebaseio.com",
  projectId: "tlci-18eed",
  storageBucket: "",
  messagingSenderId: "578320888617",
  appId: "1:578320888617:web:d130ab621baa5d70"
};

const fire = firebase.initializeApp(config);

export default fire;

// service cloud.firestore {
//     match /databases/{database}/documents {
//       match /{document=**} {
//         allow read, write;
//       }
//     }
//   }
