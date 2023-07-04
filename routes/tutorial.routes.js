const router = require("express").Router();
const tutorialsController = require("../controllers/tutorial.controller.js");

router.get("/", tutorialsController.findAll);
router.get("/published", tutorialsController.findAllPublished);
router.get("/:id", tutorialsController.findOne);

router.post("/", tutorialsController.create);

router.put("/:id", tutorialsController.update);

router.delete("/:id", tutorialsController.delete);

module.exports = router;