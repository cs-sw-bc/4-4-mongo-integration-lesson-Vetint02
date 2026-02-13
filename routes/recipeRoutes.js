import { Router } from "express";
import { list, redirectToNewRecipe, redirectToEditRecipe, redirectToDeleteRecipe } from "../controllers/recipes.js";

const router = Router();

router.get("/", list);
router.get("/new", redirectToNewRecipe);
router.get("/edit", redirectToEditRecipe);
router.get("/delete", redirectToDeleteRecipe);  
  
export default router;
