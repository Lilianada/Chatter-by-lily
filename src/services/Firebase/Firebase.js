// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGMce2c5yjQ4lbRHcco8pJGa3UZaFFUWE",
  authDomain: "chatter-app-f65ae.firebaseapp.com",
  projectId: "chatter-app-f65ae",
  storageBucket: "chatter-app-f65ae.appspot.com",
  messagingSenderId: "198866169869",
  appId: "1:198866169869:web:95ac9df0638a05a6492544",
  measurementId: "G-ERHX8V7RM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const provider = new FacebookAuthProvider();
 