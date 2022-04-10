import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvKflb3YnZYMJXRNs0yBlLkdV3Hpr0iKE",
  authDomain: "devconnect-nextjs.firebaseapp.com",
  projectId: "devconnect-nextjs",
  storageBucket: "devconnect-nextjs.appspot.com",
  messagingSenderId: "413095893851",
  appId: "1:413095893851:web:d3de2ad58a46f00fe7987e",
  measurementId: "G-B265PSLFXL"
};

// Initialize Firebase 
if(!firebase.apps.length){
    const app = initializeApp( firebaseConfig);
}
const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();