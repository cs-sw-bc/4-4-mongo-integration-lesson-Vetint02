import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    ingredients: [String]
});

export default mongoose.model('recipe', recipeSchema)