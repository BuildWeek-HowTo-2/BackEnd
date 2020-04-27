exports.up = function(knex) {
  return knex.schema.createTable('instructors', instructors => {
    instructors.increments();

    instructors
      .string('username', 128)
      .notNullable()
      .unique();
    instructors.string('password', 128).notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructors');
};
