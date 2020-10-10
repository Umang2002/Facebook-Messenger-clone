import firebase from "firebase"

const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyC79pbnlrSCazD4S1NOZ5YIxiiKw50etxw",
    authDomain: "facebook-messanger-clone-9d7c5.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-9d7c5.firebaseio.com",
    projectId: "facebook-messanger-clone-9d7c5",
    storageBucket: "facebook-messanger-clone-9d7c5.appspot.com",
    messagingSenderId: "353129871915",
    appId: "1:353129871915:web:5828bcb955453f18e9886e",
    measurementId: "G-VFG4XSP266"
  });

  const db = firebaseApp.firestore();

  export default db