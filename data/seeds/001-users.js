const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "Lilly",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Jade",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Mara",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Maddie",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Symarah",
          password: bcrypt.hashSync("testing123")
        },

      ]);
    });
};
