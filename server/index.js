const express = require("express");
const app = express();
const menusRouter = require('./routes/menusRoute');
const cors = require('cors')
const db = require('./db')
const path = __dirname + '/public/'
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.static(path))
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(path + "index.html");
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

app.listen(PORT, () => {
    if (process.env.RUN_ENV == "prod") {
        process.env.BASE_URL=`https://menu-dntpdkhpxq-uc.a.run.app`
    }
    else {
        process.env.BASE_URL=`http://localhost:${PORT}`
    }
    console.log(`HTTP server running at ${process.env.BASE_URL}`);
});