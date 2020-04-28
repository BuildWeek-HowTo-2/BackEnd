
exports.up = function(knex) {
  return knex.schema.createTable('tutorial_directions', td => {
    td.increments();
    td
      .integer('step_number')
      .notNullable()
      .unsigned();
    td
      .string('instructions')
      .notNullable();
    td
      .integer('tutorial_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('tutorials')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tutorial_directions')
};
