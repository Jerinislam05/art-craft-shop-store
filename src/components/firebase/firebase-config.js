// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQf-RGR6K6znx8neAynIhSqEF9_3UPW0E",
  authDomain: "art-craft-shop.firebaseapp.com",
  projectId: "art-craft-shop",
  storageBucket: "art-craft-shop.firebasestorage.app",
  messagingSenderId: "106190970990",
  appId: "1:106190970990:web:e51328877e3fbeaaa7067f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };