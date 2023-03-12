// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxbPc-3b0NCBVDUEBVkXDK43suVd337fc",
  authDomain: "journal-app-b9612.firebaseapp.com",
  projectId: "journal-app-b9612",
  storageBucket: "journal-app-b9612.appspot.com",
  messagingSenderId: "874642787814",
  appId: "1:874642787814:web:643d85a56bb18000f91a27",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
