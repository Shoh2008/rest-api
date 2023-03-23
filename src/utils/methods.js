const id = () => {
    return JSON.stringify(parseInt(Date.now() / Math.random() * 10))
}

const random = (array, res) => {
    res.json(array[parseInt(Math.random() * array.length)])
}

const find = (array, req, res) => {
    res.json(array.find(e => e.id === req.params.id))
}

const create = (array, req, res) => {
    const item = { id: id(), ...req.body }
    array.push(item)
    res.json(item)
}

const update = (array, req, res) => {
    array.map((e, i) => {
        if (e.id === req.params.id) {
            let item = { id: req.params.id, ...req.body }
            array.splice(i, 1, item)
            res.json(item)
        }
    })
}

const remove = (array, req, res) => {
    array.map((e, i) => {
        if (e.id === req.params.id) {
            array.splice(i, 1)
            res.json(e)
        }
    })
}

module.exports = { random, find, create, update, remove }