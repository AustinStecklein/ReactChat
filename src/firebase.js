// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseApp = initializeApp( {
  apiKey: "AIzaSyAz8HD9SerPDfXPz8p2Nsj_KxHAXFhDqmM",
  authDomain: "messagerapp-5d595.firebaseapp.com",
  projectId: "messagerapp-5d595",
  storageBucket: "messagerapp-5d595.appspot.com",
  messagingSenderId: "159097712823",
  appId: "1:159097712823:web:93c048b759f83ef96c9d32",
  measurementId: "G-WV6YWBDE35"
});

const db = getFirestore()
const provider = new GoogleAuthProvider()

// Initialize Firebase
const analytics = getAnalytics(firebaseApp);
export {db, provider, analytics}
