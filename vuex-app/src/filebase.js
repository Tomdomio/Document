import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const fb = initializeApp({
  apiKey: "AIzaSyB5fVU7khV7jAnWkk1D5qsQn8-EvO2Oe00",
  authDomain: "library-8f723.firebaseapp.com",
  projectId: "library-8f723",
  storageBucket: "library-8f723.appspot.com",
  messagingSenderId: "192326389155",
  appId: "1:192326389155:web:949ac39e62ba45059b5e16",
});

const db = getFirestore();

export default { fb, db };
