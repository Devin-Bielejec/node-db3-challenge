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

const 