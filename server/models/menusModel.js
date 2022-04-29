const db = require('../db.js')

const menusModel = {
    // getAllMenus: new Promise((resolve, reject) => {
    //     const query = "SELECT * FROM menus";

    //     db.all(query, [], (err, rows) => {
    //     if (err) {
    //         reject(err)
    //     } else {
    //         resolve(rows)
    //         }
    //     }),
    //     console.log("fetched all menus")
    // }),

    addMenu: ({name, description, img_name}) => {
        const query = "INSERT INTO menus (name, description, img_name) VALUES (?, ?, ?)";

        db.run(query, [name, description, img_name], err => {
            if (err) {
                console.log(err)
            }
        })
    },
    deleteMenu: ({id}) => {
        const query = "DELETE FROM menus WHERE id = ?";
        db.run(query, [id], err => {
            if (err) {
                console.log(err)
            }
            console.log("deleted " + id)
        })
    },

}

module.exports = menusModel