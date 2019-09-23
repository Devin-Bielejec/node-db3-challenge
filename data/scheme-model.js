const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const find = () => {
    return db('schemes');
}

const findById = id => {
    return db("schemes")
    .where({ id })
    .first();
}

const findSteps = scheme_id => {
    return db("schemes as s")
    .join("steps as st", "s.id", "st.scheme_id")
    .select("s.id, s.scheme_name, st.step_number, st.instructions")
    .where({ id })
}

const add = scheme => {
    return db("schemes")
    .insert(scheme)
    .then(ids => ({id: ids[0] }));
}

const update = (changes, id) => {
    return db("schemes")
    .where("id", Number(id))
    .update(changes);
}

const remove = id => {
    return db("schemes")
    .where("id", Number(id))
    .del();
}
// module.exports = {
//     find,
//     findById,
//     findSteps,
//     add,
//     update,
//     remove
// }