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

export async function createNewRecipe(req, res){
  try{
    // Fetch data from request
    var {name, ingredients} = req.body;

    // Do any changes needed
    // One string - rice,bean,meat
    ingredients = ingredients.split(",");

    // Post data to database
    const newRecipe = await recipes.create({name, ingredients});
    res.redirect("/recipes");
  }
  catch (error){
    console.error("failed the create recipe:", error);
    res.status(500).send("failed to create recipes");
  }
}

export async function redirectToEditRecipe(req, res) {
    res.render("recipes/edit", { title: "Edit Recipe" });
}


export async function redirectToNewRecipe(req, res) {
    res.render("recipes/new", { title: "New Recipe" });
}

export async function redirectToDeleteRecipe(req, res) {
  const all_recipes = await recipes.find();
    res.render("recipes/delete", { title: "Delete Recipe", recipes: all_recipes });
}

export async function updateRecipe(req, res) {
  try{
    var {name, ingredients} = req.body;

    ingredients = ingredients.split(",");

    const updatedRecipe = await recipes.findOneAndUpdate({name: name}, {name, ingredients});
    res.redirect("/recipes");
  }
  catch (err){
    console.error("Failed to update recipe: ", err);
    res.status(500).send("Failed to Update recipes");
  }
}

export async function deleteRecipe(req, res) {
  try{
    var {name} = req.body;

    const deletedRecipe = await recipes.findOneAndDelete({name: name});

    res.redirect("/recipes");
  }
  catch (err){
    console.error("Failed to delete recipe: ", err);
    res.status(500).send("Failed to delete recipe");
  }
}