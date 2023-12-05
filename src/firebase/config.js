import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDJWqf-SkCJ6s3t8NQ8tEfYAt2fwBKlvFY",
  authDomain: "scoutingapp-fe023.firebaseapp.com",
  projectId: "scoutingapp-fe023",
  storageBucket: "scoutingapp-fe023.appspot.com",
  messagingSenderId: "626616307949",
  appId: "1:626616307949:web:f33d0b742513d3aa65bce4",
  measurementId: "G-T1DEDX5XNG"
};

// Initialize Firebase
export const FirebaseApp = initializeApp (firebaseConfig);
export const FirebaseDB = getFirestore (FirebaseApp)
export const FirebaseAuth = getAuth( FirebaseApp);