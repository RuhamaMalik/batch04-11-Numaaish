import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification ,
  sendPasswordResetEmail ,
  updatePassword ,
  GoogleAuthProvider ,
  signInWithPopup,
  signInWithRedirect ,
  setPersistence, browserLocalPersistence 
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
    // console.log(userCredintial?.user);
   await sendEmailVerification(auth.currentUser)
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


////////////////////// logOut

const _signOut = ()=>{
signOut(auth)
}

document.getElementById("SignOut")?.addEventListener("click",  _signOut);


///////////////// Forgot Password

const _fPassword =async ()=>{
  try {
    const email = document.getElementById("email").value;
    await sendPasswordResetEmail(auth, email);
  // alert("Signin Now!")
  } catch (error) {
    console.log(error);
    
  }
}

document.getElementById("fpswd")?.addEventListener("click",  _fPassword);



///////////////// Update Password

const UpdatePswd =async ()=>{
  try {
    const user = auth.currentUser;
    const newPswd = document.getElementById("newPswd").value;
    await updatePassword(user, newPswd)
    console.log("Password Updated");
  } catch (error) {
    console.log(error);
    
  }
}

document.getElementById("updatePswd")?.addEventListener("click",  UpdatePswd);


/////////////////////////// sigIn With Google

const provider = new GoogleAuthProvider();
const _sigInWithGoogle = async () => {
  try {
    // Sign out if user is already signed in
    await signOut(auth);
    
    // Thoda delay daal rahe hain sign-out ke baad
    setTimeout(async () => {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user);
    }, 1000); // 1 second delay
  } catch (error) {
    console.log("Error in Sign-in with Google");
    console.log(error);
  }
};
document.getElementById("sigInWithGoogle")?.addEventListener("click",  _sigInWithGoogle);



// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log(user);
//   } else {
//     console.log("user signed out");
//     if (window?.location?.pathname === "/html/profile.html" ) {
//       console.log(">>>>> ", window.location);
//       window.location.replace("/" );
//     }
//   }
// });

