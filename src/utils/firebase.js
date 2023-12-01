// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAuHrjMt2CosU1C6bZRcZTSc0YSJq6lN0",
  authDomain: "netflix-gpt-88ffa.firebaseapp.com",
  projectId: "netflix-gpt-88ffa",
  storageBucket: "netflix-gpt-88ffa.appspot.com",
  messagingSenderId: "790286250441",
  appId: "1:790286250441:web:d2c053568b2d990697b818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();