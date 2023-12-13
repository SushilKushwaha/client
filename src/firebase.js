// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nepalestate-856b7.firebaseapp.com",
  projectId: "nepalestate-856b7",
  storageBucket: "nepalestate-856b7.appspot.com",
  messagingSenderId: "36457417049",
  appId: "1:36457417049:web:b761721fbc7aba4c916448"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);