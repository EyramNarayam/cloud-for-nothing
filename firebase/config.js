// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4kIl3_kxxQ3tvGx3j_Wo9At_SOOlElx4",
  authDomain: "cloud-for-nothing.firebaseapp.com",
  projectId: "cloud-for-nothing",
  storageBucket: "cloud-for-nothing.firebasestorage.app",
  messagingSenderId: "135719091865",
  appId: "1:135719091865:web:e358695feeab3325e40208",
  measurementId: "G-D4R1RXKHRB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);