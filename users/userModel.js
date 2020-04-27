const db = require('../data/dbConfig');

module.exports = {
    insert,
    get,
    getById,
    getBy,
    getByWithPassword,
    update,
    remove
}

async function insert(user) {
    const [id] = await db('users').insert(user, 'id');
 
    return getById(id).select('id', 'username', 'role');
}

function get() {
    return db('users').select('id', 'username', 'role');
}

function getById(id) {
  return db('users')
  .where({id})
  .first()
}

// function getById(id) {
//     return db('users').where({ id }).select('id', 'username', 'role').first();
// }

function getBy(filter) {
    return db('users')
        .where(Object.keys(filter)[0], 'like', '%' + Object.values(filter)[0] + '%')
        .select('id', 'username', 'role');
}

//for login
function getByWithPassword(filter) {
    return db('users').where(filter);
}

function update(changes, id) {
    return db('users').where({ id }).update(changes).then(count => {
        return getById(id);
    });
}

function remove(id) {
    return db('users').where({ id }).del();

}