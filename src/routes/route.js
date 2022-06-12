const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")

router.get("/test-me/:userId", function (req, res) {
   JSON.stringify (req.params)
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor )



module.exports = router;