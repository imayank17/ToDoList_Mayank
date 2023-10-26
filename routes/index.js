const router = require("express").Router()

// routes will be here

router.get("/",(req, req) =>{
    res.send("welcome to the home page!")

})

module.exports = router;