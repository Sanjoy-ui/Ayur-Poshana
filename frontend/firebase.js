// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv'
  dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "hackathon1-a3ee1.firebaseapp.com",
  projectId: "hackathon1-a3ee1",
  storageBucket: "hackathon1-a3ee1.firebasestorage.app",
  messagingSenderId: "256186669101",
  appId: "1:256186669101:web:a8fbc1ac9dbf8eae8c00a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}
