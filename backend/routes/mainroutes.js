const { mainModel } = require("../models/mainmodel");

const mainRoutes = require("express").Router();

mainRoutes.get("/", async (req, res) => {
    try {
        const data = await mainModel.find({ sector: "Aerospace & defence" });
        // const obj = {};
        // for (let i = 0; i < data.length; i++) {
        //     if (obj[data[i].sector]) {
        //         obj[data[i].sector]++;
        //     } else {
        //         obj[data[i].sector] = 1;
        //     }
        // }
        res.send({ msg: data });
    } catch (error) {
        res.send({ msg: error.message });
    }
})

module.exports = { mainRoutes };

const newObj = { "msg": { "Energy": 525, "Environment": 14, "": 229, "Government": 18, "Aerospace & defence": 19, "Manufacturing": 49, "Retail": 38, "Financial services": 39, "Support services": 17, "Information Technology": 15, "Healthcare": 2, "Food & agriculture": 9, "Automotive": 4, "Tourism & hospitality": 1, "Construction": 9, "Security": 2, "Transport": 5, "Water": 3, "Media & entertainment": 2 } }