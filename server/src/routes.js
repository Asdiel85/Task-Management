const router = require("express").Router();

const homeController = require("./controllers/homecontroller");
const userController = require("./controllers/userController");
const authController = require("./controllers/authController");
const taskController = require("./controllers/taskController");

router.use(homeController);
router.use("/auth", authController);
router.use("/tasks", taskController);
router.use("/users", userController);

module.exports = router;
