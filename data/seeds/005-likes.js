
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {
          tutorial_id: 1,
          user_id: 1
        },
        {
          tutorial_id: 1,
          user_id: 2
        },
        {
          tutorial_id: 2,
          user_id: 3
        },
        {
          tutorial_id: 2,
          user_id: 4
        },
        {
          tutorial_id: 3,
          user_id: 5
        },
        {
          tutorial_id: 3,
          user_id: 3
        },
        {
          tutorial_id: 4,
          user_id: 1
        },
        {
          tutorial_id: 4,
          user_id: 2
        },
        {
          tutorial_id: 6,
          user_id: 3
        },
        {
          tutorial_id: 6,
          user_id: 4
        },
        {
          tutorial_id: 7,
          user_id: 1
        },
        {
          tutorial_id: 7,
          user_id: 2
        },
        {
          tutorial_id: 7,
          user_id: 3
        },
        {
          tutorial_id: 7,
          user_id: 4
        },
        {
          tutorial_id: 7,
          user_id: 5
        },
        {
          tutorial_id: 8,
          user_id: 5
        },
        {
          tutorial_id: 8,
          user_id: 4
        },
        {
          tutorial_id: 9,
          user_id: 1
        },
        {
          tutorial_id: 9,
          user_id: 5
        },
        {
          tutorial_id: 10,
          user_id: 3
        },
        {
          tutorial_id: 10,
          user_id: 4
        },

      ]);
    });
};
