// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNXfIgRMnLZDgkEIdukGaG4JE-1RxJtGQ",
  authDomain: "simple-firebase-44b7f.firebaseapp.com",
  projectId: "simple-firebase-44b7f",
  storageBucket: "simple-firebase-44b7f.firebasestorage.app",
  messagingSenderId: "830563712458",
  appId: "1:830563712458:web:86b187f95ecd1c3f936333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
