// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-31806.firebaseapp.com",
  projectId: "mern-estate-31806",
  storageBucket: "mern-estate-31806.appspot.com",
  messagingSenderId: "418907235866",
  appId: "1:418907235866:web:c0d49795faea57416553a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);