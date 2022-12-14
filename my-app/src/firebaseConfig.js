// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmxbEJcbJSoYyuvRhI_0TBOt546cUhBQ",
  authDomain: "kirkegaardenshistorie.firebaseapp.com",
  projectId: "kirkegaardenshistorie",
  storageBucket: "kirkegaardenshistorie.appspot.com",
  messagingSenderId: "375881488906",
  appId: "1:375881488906:web:7e27fbc2d1283b0a995df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export const db = getFirestore(app);