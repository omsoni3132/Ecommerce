
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTVmJ1DePbX0mAxKF7hBw6QJb5YxLdtR0",
  authDomain: "e-commerce-fc515.firebaseapp.com",
  projectId: "e-commerce-fc515",
  storageBucket: "e-commerce-fc515.appspot.com",
  messagingSenderId: "151002358886",
  appId: "1:151002358886:web:5ba83b355a6842d5f8b9a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth = getAuth(app);