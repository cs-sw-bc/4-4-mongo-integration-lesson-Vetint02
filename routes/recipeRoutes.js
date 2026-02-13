import { Router } from "express";
import { list, deleteRecipe, updateRecipe, createNewRecipe, redirectToNewRecipe, redirectToEditRecipe, redirectToDeleteRecipe } from "../controllers/recipes.js";

const router = Router();

router.get("/", list);
router.get("/new", redirectToNewRecipe);
router.get("/edit", redirectToEditRecipe);
router.get("/delete", redirectToDeleteRecipe);
router.post("/", createNewRecipe);
router.post("/update", updateRecipe);
router.post("/delete", deleteRecipe);
  
export default router;
