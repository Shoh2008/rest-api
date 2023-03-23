const { find, create, update, remove } = require("../utils/methods")

let array = []

const GET = (req, res) => {
    try {
        res.json(array)
    } catch (e) { res.json(e) }
}

const GETONE = (req, res) => {
    try {
        find(array, req, res)
    } catch (e) { res.json(e) }
}

const POST = (req, res) => {
    try {
        create(array, req, res)
    } catch (e) { res.json(e) }
}

const PUT = (req, res) => {
    try {
        update(array, req, res)
    } catch (e) { res.json(e) }
}

const DELETE = (req, res) => {
    try {
        remove(array, req, res)
    } catch (e) { res.json(e) }
}

module.exports = { GET, GETONE, POST, PUT, DELETE }