// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-a993d.firebaseapp.com",
  projectId: "mern-realestate-a993d",
  storageBucket: "mern-realestate-a993d.appspot.com",
  messagingSenderId: "857340804256",
  appId: "1:857340804256:web:9617a4651e3cc3fbc6ddc5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);