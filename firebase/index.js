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
  doc, setDoc, db,collection, updateDoc , addDoc, serverTimestamp
} from "./firebase.config.js";

const register = async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const contact = document.getElementById("contact").value;
  const name = document.getElementById("name").value;

  try {
    let userCredintial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    let user = userCredintial?.user;

    await setDoc(doc(db, "users", user.uid), {   ///// create user in db
      name,
      age,
      contact,
      email,
      isActive:true,
      timestamp:serverTimestamp()
    });

    window.location.replace("/" );
    console.log(user);
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

////////////sign in with google

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const _sigInWithGoogle = async () => {
    try {
        await signOut(auth);  // 🛑 Pehle Logout
        console.log("User signed out before sign-in attempt.");

        const result = await signInWithPopup(auth, provider); // 🟢 Phir Sign-in
        console.log("User signed in:", result.user);
    } catch (error) {
        console.error("Google Sign-In Error:", error.message);
    }
};

document.getElementById("sigInWithGoogle")?.addEventListener("click", _sigInWithGoogle);



//////////// UPDATE PROFILE 


// const updateProfile = async ()=>{
//   const name = document.getElementById("prof-username").value;
//   const userRef = doc(db, "users", auth.currentUser.uid);
//   console.log(auth.currentUser.uid);
//   await updateDoc(userRef, {
//   name
//   });
// }

// document.getElementById("prof-username")?.addEventListener("blur", updateProfile)












const elements = document.querySelectorAll(".update")
  
elements.forEach((elem)=>{
  // document.getElementById("prof-username")
  elem.addEventListener("blur", async ()=>{
    
    // console.log(elem.name);
    
    const userRef = doc(db, "users", auth.currentUser.uid);
  console.log(auth.currentUser.uid);
  await updateDoc(userRef, {
   [elem.name]: elem.value
  });
  }
  )

})



///////////////// update profile Image

const oldImage = document.getElementById("profImg");

const uploadImg = async ()=>{
  const file = document.getElementById("image");
  const selectedImg = file.files[0];

  const formData = new FormData()
  formData.append("file", selectedImg)
  formData.append("upload_preset", "firebaseXcloudinary")
  formData.append("cloud_name", "duo0iqvpr")


  try {
     const response =  await fetch(`https://api.cloudinary.com/v1_1/duo0iqvpr/image/upload`,{
          method:"POST",
          body:formData
      })


         const data = await response.json()
         const url=  data.secure_url

         /////////////////////// add image in firebase

         const userRef = doc(db, "users", auth.currentUser.uid);

         await updateDoc(userRef, {
           proFileImg:url
         });
         oldImage.src = url


  } catch (error) {
      console.log(error);
      
  }

}

document.querySelector("#uploadBtn").addEventListener("click", uploadImg)




// ("prof-username")?.addEventListener("blur", updateProfile)




///////////////////////// ADD DOCUMENT

const addPost = async()=>{
  const file = document.getElementById("image");
  const selectedImg = file.files[0];

      let image =   await uploadImge(selectedImg);

  const post  = await addDoc(collection(db, "posts"), {
    image,
    title: "Black hole",
    description: "A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape it.",
  isActive:true,
  timestamp: serverTimestamp(),
  userId: auth.currentUser.uid
  });

  console.log("Document written with ID: ", post);
}

document.getElementById("newPostBtn")?.addEventListener("click", addPost)

















































//////////////////////// Helper


const uploadImge = async (file)=>{

  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", "firebaseXcloudinary")
  formData.append("cloud_name", "duo0iqvpr")


  try {
     const response =  await fetch(`https://api.cloudinary.com/v1_1/duo0iqvpr/image/upload`,{
          method:"POST",
          body:formData
      })


         const data = await response.json()
         return  data.secure_url
  } catch (error) {
      console.log(error);
      
  }

}
