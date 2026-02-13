//import recipes from "../data/recipes.js";
import recipes from "../models/recipes.js";

export async function list(req, res) {
  try {
    const all_recipes = await recipes.find();
    res.render("recipes/index", { title: "Recipe List", recipes: all_recipes });
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    res.status(500).send("Failed to fetch recipes");
  }
}


export async function redirectToEditRecipe(req, res) {
    res.render("recipes/edit", { title: "Edit Recipe" });
}


export async function redirectToNewRecipe(req, res) {
    res.render("recipes/new", { title: "New Recipe" });
}

export async function redirectToDeleteRecipe(req, res) {
    res.render("recipes/delete", { title: "Delete Recipe", recipes: recipes });
}