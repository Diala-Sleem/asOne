import express from "express"
const router = express.Router()

import {
  getProducts,
  getProductById,
  getProductByUserId,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getTopCategoryName,
} from "../controllers/productControllers.js";
import { 
    protect, 
    isAdmin } from "../middleware/authMiddleware.js"

router.route("/")
    .get(getProducts)
    .post(protect, createProduct)

router.route("/:id/reviews").post(protect, createProductReview)

router.get("/top", getTopProducts)
router.get("/topCategory", getTopCategoryName);


router.route("/:id")
    .get(getProductById)
    .delete(protect, deleteProduct)
    .put(protect, updateProduct)

router.route("/user/:userId")
    .get(getProductByUserId)

export default router