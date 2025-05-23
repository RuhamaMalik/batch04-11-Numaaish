const express = require("express");
const app = express();


app.get("", (req, res)=>{
res.send("Home Page ")
});

app.get("/about", (req, res)=>{
res.send(`<h1>About Page ${req.query.name}    </h1>`)
})


app.get("*", (req, res)=>{
res.send(`<h1>4O4 Page NotFound </h1>`)
})



app.listen(5000, ()=>console.log("server is Runng on port " + 5000)
)
