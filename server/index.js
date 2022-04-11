const express = require("express");
const app = express();
const menusRouter = require('./routes/menusRoute');
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send ("Health check");
}); 

app.use('/menus', menusRouter);

app.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000");
});