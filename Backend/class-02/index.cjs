// import fs from "fs";
// import path from "path";

// const fs = require("fs")
// const path = require("path")


// fs.writeFileSync("test.js" , "console.log('Hello test js update')")

// console.log(__dirname);

// console.log(__filename);

///////////////////// Create Basic Server


// const http = require("http");
// const data = require("./data")

// http.createServer((req, res) => {
//         // res.write("<h1> Server Created ... </h1>");

//     res.writeHead(
//         200,{
//             "content-type":"application/json"
//         }
//     );


//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(2025, () => console.log("Server is Running on port 2025")
// )


////////////// Create files using terminal
const fs = require("fs")

// console.log(process); // global object nodejs
// console.log(process.argv[2]); 

const file = process.argv;

// fs.writeFileSync(file[2], `"${file[3]}"` );

// fs.unlinkSync("test.js")


if (file[2] === "add") {
    fs.writeFileSync(file[3], `"${file[4]}"`);
} else if (file[2] === "remove") {
    fs.unlinkSync(file[3])
} else {
    console.log("invalid input");

}
