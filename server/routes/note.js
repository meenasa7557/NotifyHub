const express = require("express");

const router = express.Router();

const notifications = [

    {
        id:1,
        title:"Semester Exam Schedule Released",
        department:"CSE",
        category:"Notice"
    },

    {
        id:2,
        title:"Placement Drive Tomorrow",
        department:"Training & Placement",
        category:"Event"
    },

    {
        id:3,
        title:"Heavy Rain Holiday",
        department:"Administration",
        category:"Urgent"
    },

    {
        id:4,
        title:"Hackathon Registration Open",
        department:"CSE",
        category:"Event"
    }

];

router.get("/", (req,res)=>{

    res.json(notifications);

});

module.exports = router;