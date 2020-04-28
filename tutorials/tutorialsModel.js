const db = require('../data/dbConfig');

module.exports = {
  get,
  getBy,
  getById,
  findById
}

function get() {
  return db('tutorials')
}

function getBy(filter) {
return db('tutorials').where(filter).first()
}

function getById(id) {
  return db('instructors').where({ id }).select('id', 'username',).first();
}


function findById(id) {
  return db('tutorials as t')
    .select('i.username','t.id as tutorial_id', 't.title', 't.summary')
    .join('instructors as i', 't.instructor_id', 'i.id')
    .where('i.id', id)
   
}