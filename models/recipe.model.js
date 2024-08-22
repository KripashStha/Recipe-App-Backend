import mongoose from "mongoose";
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    ingredients: [{ type: String, required: true }], // Array of strings for ingredients
    instructions: [{ 
        stepNumber: { type: Number }, // Optional: To specify step number
        description: { type: String, required: true } // Description of the step
    }], // Array of objects for step-by-step instructions
    servings: Number,
    cookingtime: String,
    preptime: String,
    cuisine: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true,
});

const Recipe = model("Recipe", recipeSchema);
export default Recipe;
