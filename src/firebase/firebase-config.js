import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRxnlHtM8K2WAARr03YW4XMrREqf9j2Iw",
  authDomain: "journal-app-843ee.firebaseapp.com",
  projectId: "journal-app-843ee",
  storageBucket: "journal-app-843ee.appspot.com",
  messagingSenderId: "1016192669014",
  appId: "1:1016192669014:web:afb7c8b6f5597b252532f7",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
