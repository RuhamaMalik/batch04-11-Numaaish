import {
  onAuthStateChanged,
  doc,
  auth,
  getDoc,
  db,
} from "../firebase.config.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
     let  currentUser = docSnap.data();
     console.log(currentUser);
     
     let username = document.getElementById("prof-username")
     let contact = document.getElementById("prof-contact")
     let email = document.getElementById("prof-email")
     let profImg = document.getElementById("profImg")

     if(username)username.value = currentUser.name
     if(contact)contact.value = currentUser.contact
     if(email)email.innerHTML = currentUser.email
     if(profImg) profImg.src = currentUser.proFileImg

    } else {
      console.log("No such document!");
    }

  } else {

    console.log("user signed out");
    if (window?.location?.pathname === "/html/profile.html") {
      console.log(">>>>> ", window.location);
      window.location.replace("/");
    }

  }
});
