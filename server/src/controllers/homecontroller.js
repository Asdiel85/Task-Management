const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json('Home page')
})

module.exports = router