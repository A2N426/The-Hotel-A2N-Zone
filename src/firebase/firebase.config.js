// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW_CkNW2xCNPQgJ1wj8zyqfcCApCFSh6Y",
  authDomain: "the-hotel-a2n-zone.firebaseapp.com",
  projectId: "the-hotel-a2n-zone",
  storageBucket: "the-hotel-a2n-zone.appspot.com",
  messagingSenderId: "464118921635",
  appId: "1:464118921635:web:79fa9d07f27c93ba304216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;