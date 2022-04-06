const menusModel = require('../models/menusModel')

const menusController = {
    getAllMenus: async (req, res) => {
        res.json({
            results: await menusModel.getAllMenus
        })
    },
    // getResults: async (req, res) => {
    //     const { id } = req.params

    //     res.json({
    //         results: await resultsModel.getResults({id})
    //     })
    // }
}

module.exports = menusController