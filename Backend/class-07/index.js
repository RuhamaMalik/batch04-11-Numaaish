const express = require('express')
const path = require('path')
const app = express()
const port = 5000;

const staticFilesPath = path.join(__dirname, "public");
app.use(express.static(staticFilesPath));
app.set("view engine", "ejs");


app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/profile",(req,res)=>{
    const user ={
        name:"Ruhama",
        cast:"malik",
        age:10,
        email:"malikruhama7@gmail.com",
        contact:"03162446746",
        skills:["javaScript", "CSS", "HTML"]
    }
    res.render("profile", {user})
})






// app.get('/products', (req, res) => {
//     /// db query
//     res.sendFile(`${staticFilesPath}/products.html`)
// })


app.listen(port, () => console.log(`Server is listening on port ${port}!`))