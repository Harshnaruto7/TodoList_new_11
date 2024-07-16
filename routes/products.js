const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middlewares/auth");

// Add a product

router.post("/", auth, productController.addProduct);

// Getting all the product

router.get("/", productController.getProducts);

// Update a product

router.put("/:id", auth, productController.updateProduct);

// Delete a product
router.delete("/:id", auth, productController.deleteProduct);

// Fetch featured products
router.get("/featured", productController.getFeaturedProducts);

// Fetch products with price less than a certain value
router.get("/price/:price", productController.getProductsByPrice);

// Fetch products with rating higher than a certain value
router.get("/rating/:rating", productController.getProductsByRating);

module.exports = router;
