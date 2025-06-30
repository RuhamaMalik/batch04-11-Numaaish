const express = require('express')
const multer = require('multer');
require("./config/config"); // db connection
const productRoutes = require("./routes/productRoutes")
const {createLogs} = require("./middlewares")
const app = express();

const port = 3000
 
app.use(express.json());
app.use(createLogs("log.txt")); // application middleware


app.use("/api/products" , productRoutes)





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













// app.get("/api/product",
//    async (req,res)=>{
//        const products = await  Product.findOne({title:"Hair oil "});
//               res.status(200).json({message:"Product created Suuccessfully! ", products})

//   }

// )


app.get("/", (req,res)=>{
res.send("Server is Running")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))