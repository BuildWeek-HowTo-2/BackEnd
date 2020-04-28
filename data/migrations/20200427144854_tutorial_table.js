
exports.up = function(knex) {
  return knex.schema.createTable('tutorials', tutorials => {
    tutorials.increments('id');
    tutorials.string('title', 128).notNullable();
    tutorials.string('summary', 500);
    tutorials
      .integer('likes')
      .unsigned()
      .defaultTo(0);
    tutorials
      .integer('instructor_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('instructors')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tutorials');
};
