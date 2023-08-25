const express = require("express");
const { connection } = require("./dbsetup/db");
const { mainRoutes } = require("./routes/mainroutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is express app");
})
app.use("/main", mainRoutes);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Database onnection established");
        console.log(`Server is live at ${process.env.port}`);
    } catch (e) {
        console.log(e.message);
    }
})