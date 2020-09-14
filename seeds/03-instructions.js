
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 'do one thing', recipe_id: 1},
        {step: "do another thing", recipe_id: 2},
        {step: "eat it", recipe_id: 3}
      ]);
    });
};
