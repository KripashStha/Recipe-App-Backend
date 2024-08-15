import { Router } from "express";
import {createRecipe, getRecipebyId, updateRecipe, deleteRecipe} from "../controllers/recipe.controller.js";


const router = Router();

router.post("/", createRecipe);
router.get("/:id", getRecipebyId);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;