import { Schema,model } from "mongoose";

const recipeSchema = new Schema({
    title: String,
    description: String,
    ingridents: Number,
    instructions: Number,
    servings: Number,
    cookingtime: Number,
    preptime: Number,
    Cuisine: String,
});

const Recipe = model("Recipe", recipeSchema);

export default Recipe;