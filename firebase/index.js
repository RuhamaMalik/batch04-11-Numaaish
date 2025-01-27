import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "./firebase.config.js";

const register = async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    let userCredintial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredintial?.user);
  } catch (error) {
    console.log(error.message);
  }
};

// let signupForm = document.getElementById("signup-form")
// if(signupForm){

//    document.getElementById("signup-form").addEventListener("submit", register);
// }

document.getElementById("signup-form")?.addEventListener("submit", register);

const signIn = async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    let userCredintial = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredintial?.user);

    if (userCredintial?.user) window.location.pathname = "/index.html";
  } catch (error) {
    console.log(error.message);
  }
};

console.log(window.location.pathname);

// let siginForm = document.getElementById("login-form")
// if(siginForm){
//    document.getElementById("login-form").addEventListener("submit", signIn);
// }
document.getElementById("login-form")?.addEventListener("submit", signIn);









onAuthStateChanged(auth, (user) => {
   if (user) {
     const uid = user.uid;
    console.log(user);
    
   } else {
     console.log("user signed out");
     
   }
 });