const express = require("express");
//const create_db = require('./controller/createPostTable')

const app = express();

const menusRouter = require('./routes/menusRoute');


app.get("/", (req, res) => {
    res.send ("Health check");
}); 

app.use('/menus', menusRouter);

app.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000.");
});