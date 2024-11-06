import firebase from "firebase";
  
var firebaseConfig = {
  apiKey: "AIzaSyDAT_JXW4PKbug-neKelHwO21xb2laEbY8",
  authDomain: "wily-rn.firebaseapp.com",
  projectId: "wily-rn",
  storageBucket: "wily-rn.appspot.com",
  messagingSenderId: "954960071895",
  appId: "1:954960071895:web:d90c1f5043c386c589b492"
};


 if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
 export default firebase.firestore();