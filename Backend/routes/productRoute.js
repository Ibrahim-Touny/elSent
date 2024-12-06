const express = require("express");
const { createProduct } = require("../controllers/productController");
const { protect, isAdmin } = require("../middleware/authMiddleware");
const { upload } = require("../utils/fileUpload");
const { getAllProducts } = require("../controllers/productController");
const { deleteProduct } = require("../controllers/productController");
const { updateProduct } = require("../controllers/productController");
const { getProduct } = require("../controllers/productController");
const { getAllProductsByAdmin } = require("../controllers/productController");
const { deleteProductsByAdmin } = require("../controllers/productController");

const router = express.Router();

router.post("/", protect, upload.single("image"), createProduct);
router.get("/",getAllProducts);
router.get("/:id",getProduct);
router.delete("/:id", protect,deleteProduct);
router.put("/:id", protect, upload.single("image"), updateProduct);

router.get("/admin/products", protect,isAdmin, getAllProductsByAdmin);
router.delete("/admin/products", protect,isAdmin, deleteProductsByAdmin);
module.exports = router;