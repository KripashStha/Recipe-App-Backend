import mongoose from "mongoose";
const { Schema, model } = mongoose;

const shoppingListSchema = new Schema({
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" }, // References the Meal Planner
    items: [{ name: String, quantity: String }],
    completed: { type: Boolean, default: false },
}, {
    timestamps: true,
});

const ShoppingList = model("ShoppingList", shoppingListSchema);
export default ShoppingList;
