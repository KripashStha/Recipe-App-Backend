import mongoose from "mongoose";
const { Schema, model } = mongoose;

const mealPlanSchema = new Schema({
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" }, // References the Meal Planner
    recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
    startDate: Date,
    endDate: Date,
}, {
    timestamps: true,
});

const MealPlan = model("MealPlan", mealPlanSchema);
export default MealPlan;
