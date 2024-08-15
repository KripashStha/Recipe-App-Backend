import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["Cook", "Food Enthusiast", "Meal Planner", "Administrator"],
        required: true,
    },
    savedRecipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }], // For Food Enthusiasts
    createdRecipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }], // For Cooks
    mealPlans: [{ type: Schema.Types.ObjectId, ref: "MealPlan" }], // For Meal Planners
    shoppingLists: [{ type: Schema.Types.ObjectId, ref: "ShoppingList" }], // For Meal Planners
}, {
    timestamps: true,
});

const User = model("User", userSchema);
export default User;
