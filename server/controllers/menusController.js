const menusModel = require('../models/menusModel')

const menusController = {
    getAllMenus: async (req, res) => {
        res.json({
            results: await menusModel.getAllMenus
        })
    },
    addMenu: async (req, res) => {
        const {name, description, img_name} = req.body
        await menusModel.addMenu({
            name: name,
            description: description,
            img_name: img_name
        })
        res.json({
            name: name,
            description: description,
            img_name: img_name
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