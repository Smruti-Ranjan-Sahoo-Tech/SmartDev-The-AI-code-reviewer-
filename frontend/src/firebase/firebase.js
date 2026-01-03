// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIpqwpZcaRAYiEi10Ot052VJrTKr4UD4c",
  authDomain: "i-tvstream.firebaseapp.com",
  projectId: "i-tvstream",
  storageBucket: "i-tvstream.firebasestorage.app",
  messagingSenderId: "11834453766",
  appId: "1:11834453766:web:2828a51bf8a2e600b4f887",
  measurementId: "G-TL68LH1NDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app)
const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
export  {auth,db,googleProvider};