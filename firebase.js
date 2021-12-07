import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB4XoUksoHeOh6sIdoROvFxZYLdT6m0Ogg",
    authDomain: "superly-v2.firebaseapp.com",
    projectId: "superly-v2",
    storageBucket: "superly-v2.appspot.com",
    messagingSenderId: "667176211668",
    appId: "1:667176211668:web:9daea3ff94026a668ad741",
    measurementId: "G-HSQ1THDTXC"
  };

  let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }