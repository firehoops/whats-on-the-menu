

//create table
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
        console.log("Successful creation of the 'Menus' table");
        });
    
    const seed_insert = `
        INSERT INTO menus (id, name, description) VALUES
        (1, 'Test1', 'test - description')`;
    
    db.run(seed_insert, err => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of 3 books");
        });
}


module.exports = createPostTable