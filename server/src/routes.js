const router = require("express").Router();

const homeController = require("./controllers/homecontroller");
const userController = require("./controllers/userController");
const authController = require('./controllers/authController')

router.use(homeController);
router.use('/auth', authController)
router.use("/users", userController);

module.exports = router;