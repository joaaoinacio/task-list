import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmRXo53Zz1tCWrQurMwtt3uRUKaakNsdQ",
    authDomain: "curso-583ff.firebaseapp.com",
    projectId: "curso-583ff",
    storageBucket: "curso-583ff.appspot.com",
    messagingSenderId: "1080236448248",
    appId: "1:1080236448248:web:4918a95abcf1568caade0d",
    measurementId: "G-NYLHHPD9YY"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };