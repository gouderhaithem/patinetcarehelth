// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDA43rZ1iAzVRsLpLocGkOWMQaVH4EK9qQ",
    authDomain: "patients-qr.firebaseapp.com",
    projectId: "patients-qr",
    storageBucket: "patients-qr.appspot.com",
    messagingSenderId: "223754090823",
    appId: "1:223754090823:web:c081932097e127dfe97462",
    measurementId: "G-36DVVJYNWF"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
//export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);