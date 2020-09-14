exports.up = function(knex) {
    knex.schema.createTable("recipes", table=>{
        table.increments();
        table.string("recipe_name").notNullable();
        table.string("instructions").notNullable();
    }).createTable("ingredients", table=>{
        table.increments();
        table.string("ingredient_name").notNullable().unique();
    }).createTable("recipe_ingredients", table=>{
        table.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipes");
        table.integer("ingredient_id").unsigned().notNullable().references("id").inTable("ingredients");
        table.float("quantity").notNullable();
        table.unique(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function(knex) {
  knex.dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes");
};
