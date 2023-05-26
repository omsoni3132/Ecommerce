import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBx7s0AihRbS2dcMUc-ZURcWiqO2A6M_4E",
    authDomain: "ecommerce-3b58b.firebaseapp.com",
    projectId: "ecommerce-3b58b",
    storageBucket: "ecommerce-3b58b.appspot.com",
    messagingSenderId: "397220390323",
    appId: "1:397220390323:web:4db5e2988a8b40056d17c6"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);