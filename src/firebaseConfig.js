// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_eQBucnHWMy4CZoF0OimJQAGX8OmKyY",
  authDomain: "vedimaria-56fb6.firebaseapp.com",
  projectId: "vedimaria-56fb6",
  storageBucket: "vedimaria-56fb6.appspot.com",
  messagingSenderId: "947960234712",
  appId: "1:947960234712:web:3b46f7f70f037557dc4dad",
  measurementId: "G-65LDYWPZ9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)