const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

    const { fullName, email, department, message } = req.body;

    console.log("New Contact Form");

    console.log({
        fullName,
        email,
        department,
        message
    });

    res.status(200).json({
        success: true,
        message: "Message sent successfully. Administration will respond within 6 hours."
    });

});

module.exports = router;