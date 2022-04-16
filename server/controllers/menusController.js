const menusModel = require('../models/menusModel')

const menusController = {
    getAllMenus: async (req, res) => {
        res.json({
            results: await menusModel.getAllMenus
        })
    },
    addMenu: async (req, res) => {
        const {name, description} = req.body
        await menusModel.addMenu({
            name: name,
            description: description
        })
        res.json({
            name: name,
            description: description,
        })
    },
    deleteMenu: async (req, res) => {
        const {id} = req.params
        console.log(id)
        await menusModel.deleteMenu({id})
        res.send("Deleting user with id " + id)
    },
}

module.exports = menusController