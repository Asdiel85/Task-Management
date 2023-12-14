const router = require('express').Router();
const userManager = require('../managers/userManager');

router.post('/register', async (req, res) => {
    const {firstName,lastName, username, email, password, repeatPassword} = req.body;

    try {
        await userManager.register({firstName,lastName, username, email, password, repeatPassword})
        res.status(200).json('User created')
    } catch (error) {
        res.status(400).json(error.message);
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const token = await userManager.login(email, password);
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  router.get('/register', (req, res) => {
    res.status(200).json('Register page')
  })
  
  module.exports = router;