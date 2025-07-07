const express = require('express');
const multer = require('multer');
require("./config/config"); // db connection
const app = express();

const port = 3000
 
app.use(express.json());



/////////// upload files

const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null, "uploads")
    },
    filename:function(req,file,cb){
      cb(null, file.fieldname+"-"+Date.now()+".jpg");
    }
  })
})














app.get("/", (req,res)=>{
res.send("Server is Running")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))