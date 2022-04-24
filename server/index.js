const express = require("express");
const app = express();
const menusRouter = require('./routes/menusRoute');
const cors = require('cors')
const db = require('./db')
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send ("Health check");
}); 

// issues refreshing data using express router on db.all
app.get("/menus/", (req, res, next) => {
    const query = "SELECT * FROM menus";

        db.all(query, [], (err, rows) => {
        if (err) {
            console.log(err)
        }
        res.json(rows)
        });     
})
app.use('/menus', menusRouter);

app.listen(port, () => {
    console.log("HTTP server running at http://localhost:3000");
});