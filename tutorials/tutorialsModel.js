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
  getWithLike,
  getWithSteps,
  find,
  findTutorialSteps,
  whoCares
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
    .select('i.username','t.id ', 't.title', 't.summary', 't.likes',)
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
  return  db('likes as')
  .select('t.id', 't.title', 't.summary', 't.likes', 'td.step_number', 'td.instructions')
  .join('tutorials as t', 't.id', 'tutorial_id')
}
function getWithLike() {
  return db('likes as l')
  .select('l.tutorial_id', 't.title', 't.summary', 'count('*') as likes')
  .join('tutorials as t', 'l.tutorial_id', 't.id')
}

function whoCares() {
  return db('likes')
  .join('tutorials as t', 'likes.tutorial_id', 't.id')
  .select('*').count()
  .where('likes.tutorial_id', 't.tutorial_id')
  
}

function getWithSteps() {
  return db('tutorials as t')
    .select('t.id', 't.title', 't.summary', 't.likes')
    .then(tutorial => {
        return db('tutorial_directions as td')
          .select('td.step_number', 'td.instructions')
          .where('td.tutorial_id', 't.id')
           
            .then(steps => {
              console.log(tutorial)
                return {
                    tutorial,
                    steps
                }
            })
    })
}
async function find() {
	const id = db('tutorials').select('id').orderBy('id')
	const arrId = id.map(id => { return Number(id.id) });
	return await arrId.map(id => findTutorialSteps(id))
}
async function findTutorialSteps(id) {
	const user = await findById(id)
	if(user == undefined){
		return
	} else {
		return db('tutorials')
			.where('id', id)
			.select('id', 'title')
			.first()
			.then(tutorials => {
				return db('tutorial_directions as td')
					.where('td.tutorial_id', id)
					.select('td.step_number', 'td.step_instructions')
					.then(steps => {
						return {
							...tutorials,
							steps
						}
					})
			})
	}
}