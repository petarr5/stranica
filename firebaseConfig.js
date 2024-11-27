import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF0ygNUvaZKY38GDkJO90JcXpxBpFMUnc",
  authDomain: "mathapp5.firebaseapp.com",
  projectId: "mathapp5",
  storageBucket: "mathapp5.firebasestorage.app",
  messagingSenderId: "978793140303",
  appId: "1:978793140303:web:e62bd5c3613c18b8d69a3a",
  measurementId: "G-034FJWB5ZG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };