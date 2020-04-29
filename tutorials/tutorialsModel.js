const db = require('../data/dbConfig');

module.exports = {
  get,
  getBy,
  getById,
  findById,
  getDirectionsById,
  insert,
  getTutorialById,
  update,
  remove,
  getAllTutorialInfo,
  // addLike,
}

function get() {
  return db('tutorials').orderBy('likes', 'desc')
}

function getBy(filter) {
return db('tutorials').where(filter).first()
}

function getById(id) {
  return db('instructors').where({ id }).select('id', 'username',).first();
}
function getTutorialById(id) {
  return db('tutorials').where({ id }).select('id', 'title','summary', 'likes').first();
}

function findById(id) {
  return db('tutorials as t')
    .select('i.username','t.id as tutorial_id', 't.title', 't.summary')
    .join('instructors as i', 't.instructor_id', 'i.id')
    .where('i.id', id)   
}

function getDirectionsById(id) {
  return db('tutorial_directions as td')
    .select('td.step_number', 'td.instructions')
    .join('tutorials as t', 't.id', 'tutorial_id')
    .where('t.id', id)
}

async function insert(tutorial){
  const [id] = await db('tutorials').insert(tutorial,'id');
  return getTutorialById(id);
}
// function update(filter, changes)  {
//   return db("tutorials")
//     .where(filter)
//     .update(changes)
//     .then((count) => (count > 0 ? findBy(filter) : null))
//     .catch((err) => console.log(err));
// };
function update(id, post) {
  return db('tutorials')
    .where('id', Number(id))
    .update(post);    
}

function remove(id) {
  return db('tutorials').where({ id }).del();
}
// function update(changes, id) {
//   return db('tutorials').where({ id }).update(changes);
//   return getTutorialById(id); 
// }

function getAllTutorialInfo() {
  return  db('tutorial_directions as td')
  .select('t.id', 't.title', 't.summary', 't.likes', 'td.step_number', 'td.instructions')
  .join('tutorials as t', 't.id', 'tutorial_id')
}

//  function addLike(tutorial) {
//   const tutorial = tutorial.likes + 1
//  }
