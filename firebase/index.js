import {auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.config.js"

const register = async (e)=>{
e.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

 try {
//    let userCredintial =  await createUserWithEmailAndPassword(auth, email, password);
   let userCredintial =  await signInWithEmailAndPassword(auth, email, password);
   console.log(userCredintial.user);
 } catch (error) {
    console.log(error);
    
 }



}


document.getElementById("auth-form").addEventListener("submit", register);