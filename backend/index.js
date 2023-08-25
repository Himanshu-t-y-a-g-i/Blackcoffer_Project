const express = require("express");
const { connection } = require("./db/db");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is express app");
})

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Database onnection established");
        console.log(`Server is live at ${process.env.port}`);
    } catch (e) {
        console.log(e.message);
    }
})