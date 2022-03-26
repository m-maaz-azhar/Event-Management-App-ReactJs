// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArZ9Yn8oEzKGVtzwUCkexjwTI92UlL65A",
  authDomain: "competition-kiet.firebaseapp.com",
  databaseURL: "https://competition-kiet-default-rtdb.firebaseio.com",
  projectId: "competition-kiet",
  storageBucket: "competition-kiet.appspot.com",
  messagingSenderId: "299433580178",
  appId: "1:299433580178:web:036c6986e152f02da6384b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export {database}