// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXlBL1PYGwB4LnB9j1Vy8wjFwDZN4ycOs",
  authDomain: "movieloginlogout-69c6c.firebaseapp.com",
  projectId: "movieloginlogout-69c6c",
  storageBucket: "movieloginlogout-69c6c.appspot.com",
  messagingSenderId: "758755777794",
  appId: "1:758755777794:web:163784ee0cc1eaa0fb761b",
  measurementId: "G-CQYWC7XKWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database=getAuth()