
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 'do one thing', step_number: 1, recipe_id: 1},
        {step: "do another thing", step_number: 2, recipe_id: 1},
        {step: "eat it", step_number: 3, recipe_id: 1}
      ]);
    });
};
