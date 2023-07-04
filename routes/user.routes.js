const router = require("express").Router();
const userController = require("../controllers/user.controller.js");

router.get("/", userController.findAll);
router.get("/:id", userController.findOne);

router.post("/", userController.create);

router.put("/:id", userController.update);

module.exports = router;