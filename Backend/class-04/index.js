const http = require("http")
const fs = require("fs");
const url = require("url")



http.createServer( (req,res)=>{

        if(req.url === "/favicon.ico"){res.end()}
        const reqUrl = url.parse(req.url, true)

        const log = `${Date.now()} : ${reqUrl.pathname} --- ${req.method} ----------- new request \n`;

        fs.appendFile("log.txt", log , (err,data)=>{

          switch (reqUrl.pathname) {
    case "/":
        res.end("Home Page")
        break;
    case "/about":
        res.end("About Page ----------- " + reqUrl.query.name)
        break;
    case "/user":
        if(req.method === "GET"){
        res.end("Pofile Page ----------- " + reqUrl.query.name)
        }else if(req.method === "POST"){
        res.end("User created successfully! ----------- " + reqUrl.query.name)
        }
        break;

    default:
        res.end("Page not found")
        break;
}

})

    }
).listen(5000, ()=>console.log("Server is Running")
)










// const fs = require("fs");
// const path = require("path");

// const filesPath = path.join(__dirname, "files");
// const subFilesPath = path.join(__dirname, "subfiles");

// fs.readdir(filesPath, (err, files)=>{
//     // console.log(files);
    
//     files.forEach((file)=>{
//     //    console.log(file);
//         fs.readFile(`${filesPath}/${file}`, "utf-8", (err,data)=>{
//             if(err) throw new Error(err)
//                 console.log(data);
                
//         })
//     })
// })




////////////// create directory


// fs.mkdir("abc/xyz/efg", {recursive:true} ,()=>{});


// fs.cpSync(filesPath+"/text.txt", "text3.txt");


