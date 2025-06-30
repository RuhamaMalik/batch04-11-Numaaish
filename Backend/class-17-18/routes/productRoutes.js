const express = require('express');
const { createProduct, getAllProducts, getProductById, updateProductBYId, deleteProductBYId } = require('../controllers/productController');
const router = express.Router();


router.route("/")
.post(createProduct)
.get(getAllProducts)


router.route("/:id")
  .get(getProductById)
  .patch(updateProductBYId)
  .delete(deleteProductBYId)



module.exports = router;

