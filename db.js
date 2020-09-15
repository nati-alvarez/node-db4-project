const knex = require("knex");
const config = require("./knexfile").development;
const db = knex(config);

module.exports = {
    getRecipies,
    getShoppingList,
    getInstructions
}

function getRecipies(){
    return db("recipes");
}

function getShoppingList(recipe_id){
    return db("recipe_ingredients")
    .select("quantity", "ingredient_name")
    .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
    .where({"recipe_ingredients.recipe_id": recipe_id});
}

function getInstructions(recipe_id){
    return db("recipes")
    .join("instructions", "recipes.id", "instructions.recipe_id")
    .where({"recipes.id": recipe_id})
    .select('step_number', "step")
    .orderBy("step_number");
}