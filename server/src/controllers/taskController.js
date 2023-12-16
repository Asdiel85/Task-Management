const router = require("express").Router();
const taskManager = require("../managers/taskManager");
const { routeGuard } = require("../middlewares/authMiddleware");

router.post("/create", routeGuard, async (req, res) => {
  const { name } = req.body;

  try {
    const task = await taskManager.createTask({
      name,
      owner: req.user.id,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(401).json(error.message);
  }
});

router.get("/:userId", routeGuard, async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await taskManager.getTasks(userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/:taskId", routeGuard, async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const task = await taskManager.getById(taskId);
    res.status(200).json(task)
  } catch (error) {
    res.status(400).json(error.message);
  }
})

router.put("/:taskId", routeGuard, async (req, res) => {
  const taksId = req.params.taskId;
  const data = req.body;

  try {
    const updatedTask = await taskManager.updateTask(taksId, data);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete("/:taskId", routeGuard, async (req, res) => {
    const taksId = req.params.taskId;
    try {
       await taskManager.deleteTask(taksId);
      res.status(200).json('Task deleted');
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

module.exports = router;
