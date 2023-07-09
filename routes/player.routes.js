const router = require("express").Router();
const playerController = require("../controllers/player.controller.js");

/**
 * @swagger
 * /player/{id}:
 *   get:
 *     summary: Get the player with value of the given id.
 *     tags:
 *       - player
 *     description: Returns the player with the given id.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the player to retrieve.
 *         schema:
 *           type: integer 
 *     responses:
 *       200:
 *         description: The player with the given id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 player_id:
 *                   type: integer
 *                   description: The play ID.
 *                   example: 0
 *                 email:
 *                   type: string
 *                   description: The player's email address.
 *                   example: john@doe.com
 *                 firstname:
 *                   type: string
 *                   description: The player's firstname.
 *                   example: John
 *                 lastname: 
 *                   type: string
 *                   description: The player's lastname.
 *                   example: Doe
 *                 date_of_birth: 
 *                   type: string
 *                   format: date
 *                   description: The player's date of birth.
 *                   example: 2022-01-02
 *                 player_number: 
 *                   type: integer
 *                   description: The player's number.
 *                   example: 2
 *                 player_position: 
 *                   type: string
 *                   description: The player's position.
 *                   example: GK
 *       404:
 *         description: Returns a message in case the player with the given id was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed information.
 *                   example: Cannot find player with id=22
*/
router.get("/:id", playerController.findOne);
/**
 * @swagger
 * /player/:
 *   post:
 *     summary: Creates a new player according to the values passed
 *     tags:
 *       - player
 *     description: This endpoint creates a new player with an automatiacally created id. It also created a user in the database and then links it to the player.
 *     requestBody:
 *       description: The data of the new player
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code_value
 *             properties:
 *               email:
 *                 type: string
 *                 description: The player's email address.
 *                 example: john@doe.com
*               password_hash:
 *                 type: string
 *                 description: The player's hashed password.
 *                 example: 01dfae6e5d4d90d9892622325959afbe
 *               firstname:
 *                 type: string
 *                 description: The player's firstname.
 *                 example: John
 *               lastname: 
 *                 type: string
 *                 description: The player's lastname.
 *                 example: Doe
 *               date_of_birth: 
 *                 type: string
 *                 format: date
 *                 description: The player's date of birth.
 *                 example: 2022-01-02
 *               player_number: 
 *                 type: integer
 *                 description: The player's number.
 *                 example: 2
 *               player_position: 
 *                 type: string
 *                 description: The player's position.
 *                 example: GK
 *     responses:
 *       200:
 *         description: Returns the newly created player.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *             properties:
 *               email:
 *                 type: string
 *                 description: The player's email address.
 *                 example: john@doe.com
 *               firstname:
 *                 type: string
 *                 description: The player's firstname.
 *                 example: John
 *               lastname: 
 *                 type: string
 *                 description: The player's lastname.
 *                 example: Doe
 *               date_of_birth: 
 *                 type: string
 *                 format: date
 *                 description: The player's date of birth.
 *                 example: 2022-01-02
 *               player_number: 
 *                 type: integer
 *                 description: The player's number.
 *                 example: 2
 *               player_position: 
 *                 type: string
 *                 description: The player's position.
 *                 example: GK
*/
router.post("/", playerController.create);

module.exports = router;