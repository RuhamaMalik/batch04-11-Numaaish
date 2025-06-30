const mongoose = require('mongoose')

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

const ProductModel = mongoose.model("product", productSchema);

module.exports= ProductModel;
