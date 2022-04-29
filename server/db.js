const sqlite3 = require('sqlite3').verbose();

//connect to db
const db = new sqlite3.Database("./db.sqlite", err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful connection to the database {db.sqlite}");
  });


  //create table
const createTable = () => {
    db.run("DROP TABLE IF EXISTS menus");
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
        (1, 'Penne', 'with red sauce', 'penne'),
        (2, 'Breakfast Caserole', 'biscuits, eggs, sausage, and veggies', 'brek_cass'),
        (3, 'Spaghetti', 'with crispy Prosciutto', 'spag'),
        (4, 'Seafood Risotto', 'with bread', 'seafood_riss'),
        (5, 'Chicken Risotto', 'topped with parmesan and parsely', 'chicken_riss'),
        (6, 'Butternut Squash Soup', 'topped with cinammon and chives', 'butternut'),
        (7, 'Fancy Ramen', 'with a soft boiled egg', 'miso'),
        (8, 'Pizza', 'air fryer pizza with your choice of toppings', 'pizza'),
        (9, 'Chicken Parmesan', 'baked in the oven', 'chicken_parm'),
        (10, 'Stir Fry', 'rice and veggies mixed together', 'stir_fry'),
        (11, 'Teriyaki Chicken', 'served over rice with balsamic glazed veggies', 'teri'),
        (12, 'Meat & Potatoes', 'mixed together with your choice of sauce', 'meat_pot'),
        (13, 'The Basics', 'your choice of meat, rice, and veggies', 'basics')`;
    
    db.run(seed_insert, err => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of a menu");
        });
}

module.exports = db