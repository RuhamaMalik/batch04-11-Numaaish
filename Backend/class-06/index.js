const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public")

// app.use(express.static(publicPath))  // buil-in middleware

app.get("", (req,res)=>{
res.send(`<h1>Hello hOME PAGE ....</h1>`)
});


app.get("/about", (req,res)=>{
res.sendFile(`${publicPath}/about.html`)


















// res.send(`<h1>Hello from About ....</h1>`)
});

// app.get("/products", (req,res)=>{
    // db query
// res.send(`<h1>Hello profile PAGE  ${req.query.price} ==== ${req.query.color}</h1>`)
// });


// app.get("/*any", (req,res)=>{
// res.send(`<h1>404 PAGE not found</h1>`)
// });






app.listen(5000, ()=>console.log("Chal gaya hun bhai ....")
);