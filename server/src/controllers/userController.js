const router = require('express').Router();
const userManager = require('../managers/userManager');

router.get('/', async (req, res) => {
    try {
      const data = await userManager.getUsers();
      res.status(200).json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  });
  
  router.get('/:userId', async (req, res) => {
    try {   
        const user = await userManager.getById(req.params.userId);
        res.status(200).json(user);
    } catch (error) {
      res.status(401).json(error.message);
    }
  });

  router.delete('/:userId', async (req, res) => {
    try {
      if (req.user.id === req.params.userId || req.user.isAdmin) {
        await userManager.deleteUser(req.params.userId)
        res.status(200).json('User Deleted');
      }
    } catch (error) {
        res.status(401).json(error.message); 
    }
})
module.exports = router;
