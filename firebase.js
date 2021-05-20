import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoWev_t4MY2zujyyYmr7lDQuR0nhZwJ_8",
  authDomain: "whatsapp-ppc.firebaseapp.com",
  databaseURL: "https://whatsapp-ppc.firebaseio.com",
  projectId: "whatsapp-ppc",
  storageBucket: "whatsapp-ppc.appspot.com",
  messagingSenderId: "683694292089",
  appId: "1:683694292089:web:2d2d5affa0edc69d6ae8a8",
  measurementId: "G-GJJBM7NKGW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
