const db = require("../data/dbConfig");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

const find = () => {
    db('schemes');
}

const findById = id => {
    db("schemes")
    .where({ id })
    .first();
}

const findSteps = scheme_id => {
    db("schemes as s")
    .join("steps as st", "s.id", "st.scheme_id")
    .select("s.id, s.scheme_name, st.step_number, st.instructions")
    .where({ id })
}
