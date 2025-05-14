// const data1 = require("./data")
// console.log(data1);

const {username:un, data} = require("./data")


////////////// External Modules

// const colors = require('colors');

// console.log(un.rainbow);


// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass





////////////// Core Modules 1) global 2) non-global ----- nodejs k apne

const fs = require("fs");  //  non-global

// fs.writeFileSync("text2.js" , 
//     `
//     console.log('Hello from node')
//     console.log('Hello from node')
//     `);
fs.writeFileSync("data2.js" , `${data}`);




