// name export  ---- 2 ways
// default export --------- 1

// export let username = "User1";
// export let age = "10";
// export let _class = "2 A";
// export let location = {
//   l1: "abcd location",
// };

let username = "User1";
// let age = "10";
export default "10"
let _class = "2 A";
let location = {
  l1: "abcd location",
};

// export default function greet (username){
// console.log(`Hello ${username}`);
// }                                                             


function greet (username){
console.log(`Hello ${username}`);
}                                                             



export {username,location }  // name export
       
// export default greet;   // default export
// export default username;  // error