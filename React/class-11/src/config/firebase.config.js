import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore , collection, addDoc , doc, setDoc, onSnapshot } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAfxVRQ1X2HjbNiqO5A7arnPTC_5X6-oQQ",
    authDomain: "github-firebase-1a0f0.firebaseapp.com",
    databaseURL: "https://github-firebase-1a0f0-default-rtdb.firebaseio.com",
    projectId: "github-firebase-1a0f0",
    storageBucket: "github-firebase-1a0f0.firebasestorage.app",
    messagingSenderId: "330932589600",
    appId: "1:330932589600:web:820de1c839d1210efdd845"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, collection, addDoc, doc, setDoc, onSnapshot }