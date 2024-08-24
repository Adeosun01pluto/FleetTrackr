const firebaApiKey = import.meta.env.VITE_FIREBASE_API_KEY;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaApiKey,
  authDomain: "tail-241d2.firebaseapp.com",
  projectId: "tail-241d2",
  storageBucket: "tail-241d2.appspot.com",
  messagingSenderId: "1037961699733",
  appId: "1:1037961699733:web:26f61059938cdd1fba969c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app)

export const googleProvider = new(GoogleAuthProvider)
export {app, auth, db}