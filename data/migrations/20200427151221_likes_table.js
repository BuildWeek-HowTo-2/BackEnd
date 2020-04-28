exports.up = function(knex) {
  return knex.schema.createTable('likes', likes => {
    likes.increments('id');
    likes
      .integer('tutorial_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('tutorials')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    likes
    .integer('user_id')
    .notNullable()
    .unsigned()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('likes');
};
