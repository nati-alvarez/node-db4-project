exports.up = function(knex) {
    return knex.schema.createTable("recipes", table=>{
        table.increments();
        table.string("recipe_name").notNullable();
    }).createTable("ingredients", table=>{
        table.increments();
        table.string("ingredient_name").notNullable().unique();
    }).createTable("instructions", table=>{
        table.increments();
        table.string("step", 128);
        table.integer("step_number").unsigned().notNullable();
        table.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipes").onUpdate("CASCADE").onDelete("CASCADE");
    }).createTable("recipe_ingredients", table=>{
        table.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipes").onUpdate("CASCADE").onDelete("CASCADE");
        table.integer("ingredient_id").unsigned().notNullable().references("id").inTable("ingredients").onUpdate("CASCADE").onDelete("CASCADE");
        table.float("quantity").notNullable();
        table.unique(["recipe_id", "ingredient_id"]);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("instructions")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes");
};
