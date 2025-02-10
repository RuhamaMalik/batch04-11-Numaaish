import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfxVRQ1X2HjbNiqO5A7arnPTC_5X6-oQQ",
  authDomain: "github-firebase-1a0f0.firebaseapp.com",
  projectId: "github-firebase-1a0f0",
  storageBucket: "github-firebase-1a0f0.firebasestorage.app",
  messagingSenderId: "330932589600",
  appId: "1:330932589600:web:820de1c839d1210efdd845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  db,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
  addDoc,
  serverTimestamp
};
