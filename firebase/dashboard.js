import { db, collection, getDocs, onSnapshot } from "./firebase.config.js";

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

  const ref = collection(db, "users");

  const unsubscribe = onSnapshot(ref, (querySnapshot) => {

    let index = 1;
    const usersTable = document.getElementById("all-users");
    querySnapshot.forEach((currentUser) => {
          
      let user = currentUser.data();
      usersTable.innerHTML += `
        <tr>
         <th scope="row">${index++}</th>
         <td>${user?.name}</td>
         <td>${user?.email}</td>
         <td>${user?.age}</td>
         <td>${user?.isActive ? "Active" : "Block"}</td>
       </tr>
       `;
    });
  });
};

getAllUsers();
