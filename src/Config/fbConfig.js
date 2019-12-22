import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDv_igDMumTEqu1mli9VqEH5ph8oHXwlH0",
  authDomain: "po-przeszczepie-szpiku.firebaseapp.com",
  databaseURL: "https://po-przeszczepie-szpiku.firebaseio.com",
  projectId: "po-przeszczepie-szpiku",
  storageBucket: "po-przeszczepie-szpiku.appspot.com",
  messagingSenderId: "205054858605",
  appId: "1:205054858605:web:66441e00544ab25a07f664",
  measurementId: "G-8MFD767CEJ"
};
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;