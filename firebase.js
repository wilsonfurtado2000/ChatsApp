import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHO64y-R_pvQJ09BY2EW-8Kpcmup0cMCk",
    authDomain: "fir-bb28a.firebaseapp.com",
    projectId: "fir-bb28a",
    storageBucket: "fir-bb28a.appspot.com",
    messagingSenderId: "144452404507",
    appId: "1:144452404507:web:19216ba373990c09d8bfbe",
    measurementId: "G-BEQEEZF0FF"
  };
  let app;
  if(firebase.apps.length===0){
      app = firebase.initializeApp(firebaseConfig);
  }else{
      app = firebase.app();
  }
  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth}; 
