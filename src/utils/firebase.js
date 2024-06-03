// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSPobDN_ugMVWnGTyVOwQ4JD7paXtMzQ4",
  authDomain: "netflixgpt-abafe.firebaseapp.com",
  projectId: "netflixgpt-abafe",
  storageBucket: "netflixgpt-abafe.appspot.com",
  messagingSenderId: "939604455061",
  appId: "1:939604455061:web:035a3091d8920f8965759c",
  measurementId: "G-V9STB9B6QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();