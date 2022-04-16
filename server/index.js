const express = require("express");
const app = express();
const menusRouter = require('./routes/menusRoute');
const cors = require('cors')
const db = require('./db')
const asyncDb = require('./asyncDb')


app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send ("Health check");
}); 

// app.post("/menus/add/", (req, res, next) => {
//     var sql ='INSERT INTO menus (name, description) VALUES (?,?)'
//     var params =["asdf", "test description"]
//     db.run(sql, params, function (err, result) {
//         if (err){
//             res.status(400).json({"error": err.message})
//             return;
//         }
//         res.json({
//             "name": params[0],
//             "data": params[1],
//         })
//     });
// })
app.get("/menus/", (req, res, next) => {
    const query = "SELECT * FROM menus";

        db.all(query, [], (err, rows) => {
        if (err) {
            console.log(err)
        }
        res.json(rows)
        console.log("fetched all menus")
        });
        
})
app.use('/menus', menusRouter);

app.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000");
});