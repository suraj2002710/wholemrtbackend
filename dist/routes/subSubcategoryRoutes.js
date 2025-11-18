import express from "express";
const router = express.Router();
import { getSubSubcategories, getSubSubcategoriesForAdmin, getSubSubcategoriesByParent, getSubSubcategoryBySlug, createSubSubcategory, updateSubSubcategory, deleteSubSubcategory, } from "../controllers/subSubcategoryController.js";
import { uploadSingle } from "../middleware/uploadMiddleware.js";
import { admin, protect } from "../middleware/authMiddleware.js";
// import { protect, admin } from '../middleware/authMiddleware.js'; // Uncomment when auth is needed
// Admin routes (protected) - must come before /:slug route
router.route("/admin").get(protect, admin, getSubSubcategoriesForAdmin); // Get all sub-subcategories for admin
router.route("/admin/create").post(protect, admin, uploadSingle, createSubSubcategory); // Add auth: protect, admin, 
router.route("/admin/:id")
    .put(protect, admin, uploadSingle, updateSubSubcategory) // Add auth: protect, admin,
    .delete(protect, admin, deleteSubSubcategory); // Add auth: protect, admin,
// Public routes
router.route("/").get(getSubSubcategories);
router.route("/parent/:parentId").get(getSubSubcategoriesByParent);
router.route("/:slug").get(getSubSubcategoryBySlug);
export default router;
