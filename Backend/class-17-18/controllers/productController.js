const ProductModel = require("../models/productModel");

const createProduct = async(req,res)=>{
    const data = await new ProductModel(req.body);
    await data.save();
       res.status(201).json({message:"Product created Suuccessfully! ", data})
  }



  const getAllProducts = async (req,res)=>{
       const products = await  ProductModel.find({});
              res.status(200).json({message:"All Products fetched Suuccessfully! ", products})

  }

  const getProductById = 
    async (req, res) => {
      const product = await ProductModel.findById(req.params.id);
      res.status(200).json({ message: "Product Fetch Suuccessfully! ", product })
    }
  

    const updateProductBYId = 
    async (req, res) => {
      const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Product Updated Suuccessfully! ", product })
    }
  

    const deleteProductBYId = 
    async (req, res) => {
      const product = await ProductModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Product Deleted Suuccessfully! ", product })
    }

  


  module.exports={
    createProduct,
    getAllProducts,
    getProductById,
    updateProductBYId,
    deleteProductBYId
  }