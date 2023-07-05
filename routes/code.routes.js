const router = require("express").Router();
const codeController = require("../controllers/code.controller.js");

/**
 * @swagger
 * /code/{id}:
 *   get:
 *     summary: Get the code value of the given id.
 *     tags:
 *       - code
 *     description: Returns the coach code with the given id.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the code to retrieve.
 *         schema:
 *           type: integer 
 *     responses:
 *       200:
 *         description: The coach code.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code_value:
 *                   type: integer
 *                   description: The code.
 *                   example: 6712633
 * 
 *       404:
 *         description: Returns a message in case the code with the given id was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed information.
 *                   example: Cannot find code with id=123
*/
router.get("/:id", codeController.findOne);
/**
 * @swagger
 * /code/:
 *   post:
 *     summary: Creates a new code according to the values passed
 *     tags:
 *       - code
 *     description: This endpoint creates a new code with an automatiacally created id.
 *     requestBody:
 *       description: The value of the code.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code_value
 *             properties:
 *               code_value:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Returns an information that the new code was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: 
 *                   type: string
 *                   example: The new code was successfully created.
*/
router.post("/", codeController.create);

module.exports = router;