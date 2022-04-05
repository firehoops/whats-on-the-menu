const express = require("express");
//const create_db = require('./controller/createPostTable')

const app = express();

const sqlite3 = require('sqlite3').verbose();

//create a database if no exists
const db = new sqlite3.Database("main.sqlite", err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful connection to the database 'main.db'");
  });

app.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000.");
});
const createPostTable = () => {
    const  db_create  =  `
        CREATE TABLE IF NOT EXISTS menus (
        id integer PRIMARY KEY AUTOINCREMENT,
        name text,
        description text);`;

    db.run(db_create, err => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of the 'menus' table");
        });
}
const insertSeed = () => {
    const seed_insert = `
        INSERT INTO menus (id, name, description) VALUES
        (1, 'Menu 1', 'test - description');`;
    
    db.run(seed_insert, err => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful insertion of a menu");
        });
}

app.get("/", (req, res) => {
    res.send ("Hello world...");
});
createPostTable();
insertSeed();