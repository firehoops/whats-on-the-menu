const sqlite3 = require('sqlite3')

const asyncDb = new Promise((resolve, reject) => {
	let db = new sqlite3.Database("./db.sqlite", err => {
	    if (err) {
	        reject(err)
	    } else {
	        resolve(db)
	    }
	})
})

module.exports = asyncDb