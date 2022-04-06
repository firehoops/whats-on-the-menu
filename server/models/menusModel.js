const db = require('../db.js')

const menusModel = {
    getAllMenus: new Promise((resolve, reject) => {
        const query = "SELECT * FROM menus";

        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    }),

}

module.exports = menusModel