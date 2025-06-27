const express = require('express')
const mongoose = require('mongoose')
require("./config/config"); // db connection
const app = express()
const port = 3000

app.use(express.json());

//  CONNECTION 


// Schema
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    required: true
  },
  stock: {
    type: Number,
    required: true

  }
})


// / Model

const Product = mongoose.model("product", productSchema);

// ROUTES 

app.route("/api/products")
.post(
  async(req,res)=>{
    const data = await new Product(req.body);
    await data.save();
       res.status(201).json({message:"Product created Suuccessfully! ", data})
  }
).get(
 async (req,res)=>{
       const products = await  Product.find({});
              res.status(200).json({message:"Product created Suuccessfully! ", products})

  }
)


app.route("/api/product/:id")
.get(
 async (req,res)=>{
       const product = await  Product.findById(req.params.id);
              res.status(200).json({message:"Product Fetch Suuccessfully! ", product})
  }

)
.patch(
   async (req,res)=>{
       const product = await  Product.findByIdAndUpdate(req.params.id, req.body);
              res.status(200).json({message:"Product Updated Suuccessfully! ", product})
  }
).delete(
   async (req,res)=>{
       const product = await  Product.findByIdAndDelete(req.params.id);
              res.status(200).json({message:"Product Deleted Suuccessfully! ", product})
  }

)


// app.get("/api/product",
//    async (req,res)=>{
//        const products = await  Product.findOne({title:"Hair oil "});
//               res.status(200).json({message:"Product created Suuccessfully! ", products})

//   }

// )


app.listen(port, () => console.log(`Example app listening on port ${port}!`))