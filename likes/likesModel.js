const db = require('../data/dbConfig');
const tutorials = require('../tutorials/tutorialsModel')

module.exports = {
  insertLike,
  update,
  getLikesById

}

async function insertLike(like)  {
  await db('likes').insert(like)

  return tutorials.findById({ id: like.tutorial_id})
}

function update(id, like){
    return db('likes')
    .where('id', Number(id))
    .update(like);
}
function getLikesById(id) {
  return db('likes as l')
    .select('t.title', 't.summary', 't.likes','l.tutorial_id', 't.id')
    .join('tutorials as t', 't.id', 'l.tutorial_id')
    .where('l.tutorial_id', id)
}