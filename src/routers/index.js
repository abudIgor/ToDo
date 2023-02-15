const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    console.log("Teste Igor - GET ToDo");
    res.send("Hello TODO API Version 1.0");
})

module.exports = router;