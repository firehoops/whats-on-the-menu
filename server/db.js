const sqlite3 = require('sqlite3').verbose();

//connect to db
const db = new sqlite3.Database("./db.sqlite", err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful connection to the database {db.sqlite}");
  });


  //create table
let createTable = () => {
    const  db_create  =  `
        CREATE TABLE IF NOT EXISTS menus (
        id integer PRIMARY KEY AUTOINCREMENT,
        name text,
        description text,
        img_name text);`;

    db.run(db_create, err => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of the 'menus' table");
        });
    
    const seed_insert = `
        INSERT INTO menus (id, name, description, img_name) VALUES
        (1, 'Pasta', 'Rigatoni noodles with red sauce', 'penne'),
        (2, 'Breakfast Caserole', 'Biscuits, eggs, sausage, and veggies baked with cheese!', 'brek_cass')`;
    
    db.run(seed_insert, err => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of a menu");
        });
}

module.exports = db