const fs = require("fs");
const path = require("path")


/////// create

//  fs.writeFile("text.txt", `Hello from ext file.`, (err,data)=>{});



/////// read
// const file = fs.readFileSync("text.txt", "utf-8");
// console.log(file);

// fs.readFile("text.txt", "utf-8",(err,data)=>{
//     if (err ) throw new Error(err)

//         console.log(data);
        
// });


/////// update

// fs.appendFileSync("text.txt", `\nFil Updated 2`)
// fs.appendFile("textt", `\nFil Updated 3`, (err, data)=>{
//     if (err ) throw new Error(err);

// } )



/////// delete

// fs.unlink("textt", (err,data)=>{
// })





const dirPath = path.join(__dirname, "files")

///////////////// create multiple files

// for(let i=0; i<5; i++ ){
// fs.writeFile(`${dirPath}/text${i}.txt`, `${i} ---------  Hello from text file.`, (err,data)=>{});
// }


///////////////// read multiple files

fs.readdir(dirPath, (err, files))