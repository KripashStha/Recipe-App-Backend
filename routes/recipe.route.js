import { Router } from "express";
import {createRecipe, getRecipebyId, updateRecipe, deleteRecipe, getRecipes} from "../controllers/recipe.controller.js";


const router = Router();

router.post("/", createRecipe);
router.get("/:id", getRecipebyId);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);
router.get("/", getRecipes);

export default router;