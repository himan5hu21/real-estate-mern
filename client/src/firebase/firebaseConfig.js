// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-75896.firebaseapp.com",
  projectId: "mern-estate-75896",
  storageBucket: "mern-estate-75896.appspot.com",
  messagingSenderId: "977562360063",
  appId: "1:977562360063:web:e066c23ea6d82f1bc794ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
