const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        {
          username: "Jasmine",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Ashley",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Victoria",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Justine",
          password: bcrypt.hashSync("testing123")
        },
        {
          username: "Marcy",
          password: bcrypt.hashSync("testing123")
        },

      ]);
    });
};
