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
}

module.exports = menusController