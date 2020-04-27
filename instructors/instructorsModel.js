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

async function insert(instructor) {
    const [id] = await db('instructors').insert(instructor, 'id');
 
    return getById(id).select('id', 'username');
}

function get() {
    return db('instructors').select('id', 'username');
}

function getById(id) {
    return db('instructors').where({ id }).select('id', 'username',).first();
}

function getBy(filter) {
    return db('instructors')
        .where(Object.keys(filter)[0], 'like', '%' + Object.values(filter)[0] + '%')
        .select('id', 'username',);
}

//for login
function getByWithPassword(filter) {
    return db('instructors').where(filter);
}

function update(changes, id) {
    return db('instructors').where({ id }).update(changes).then(count => {
        return getById(id);
    });
}

function remove(id) {
    return db('instructors').where({ id }).del();

}