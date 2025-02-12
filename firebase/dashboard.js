import {
  db,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  doc,
  updateDoc
} from "./firebase.config.js";

// const getAllUsers = async ()=>{
//     const usersTable = document.getElementById("all-users");
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((currentUser) => {
//         let user = currentUser.data();
//         console.log(user);

// usersTable.innerHTML += `
//  <tr>
//   <th scope="row">1</th>
//   <td>${user?.name}</td>
//   <td>${user?.email}</td>
//   <td>${user?.age}</td>
//   <td>${user?.isActive ? "Active": "Block"}</td>
// </tr>
// `
//     });
// }

// getAllUsers();

const getAllUsers = async () => {
  const ref = query(
    collection(db, "users"),
    // orderBy("name", "desc"),
    // where("isActive", "==", true)
    // where("name", "==", "aafreen") // case-sensitive
    // where("skills", "array-contains", "CSS")

    // or(
    //   where("isActive", "==", true),
    //   where("skills", "array-contains", "CSS")
    // )

  );


  // query(collection(db, "users"), and(
  //   where('isActive', '==', true),   
  //   or(
  //     where("skills", "array-contains", "CSS"),
  //     where('age', '>=', 20)
  //   )
  // ));


  const unsubscribe = onSnapshot(ref, (querySnapshot) => {
    let index = 1;
    const usersTable = document.getElementById("all-users");
    usersTable.innerHTML = "";

    querySnapshot.forEach((_user) => {
      let user = _user.data();
      usersTable.innerHTML += `
          <tr>
           <th scope="row">${index++}</th>
           <td>${user?.name}</td>
           <td>${user?.email}</td>
           <td>${user?.age}</td>
           <td>${user?.isActive ? "Active" : "Block"}</td>
           <td><button type="button" onclick="updatStatus('${_user.id}', ${user?.isActive})"  class="btn text-light bg-primary ">Edit Status</button></td>
         </tr>
         `;
    });
  });
};

getAllUsers();


window.updatStatus = async (id, status)=>{
  // console.log("hello ", id);
  const userRef = doc(db, "users", id);

// Set the "capital" field of the city 'DC'
await updateDoc(userRef, {
  isActive: !status
});

}
