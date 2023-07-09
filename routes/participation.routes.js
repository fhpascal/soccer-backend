const router = require("express").Router();
const participationController = require("../controllers/participation.controller.js");

/**
 * @swagger
 * /participation/:
 *   post:
 *     summary: Create a new participation of a player for a certain game.
 *     tags:
 *       - participation
 *     description: This endpoint is used to add the participation of a player to a game. Every entry in the participation reflect one position of the player during the given game at the given time.
 *     requestBody:
 *       description: The participation.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - player_id
 *               - game_id
 *               - location_time
 *               - location_x
 *               - location_y
 *             properties:
 *               player_id:
 *                 type: integer
 *                 example: 1
 *               game_id:
 *                 type: integer
 *                 example: 1
 *               location_time:
 *                 type: string
 *                 format: timestamp
 *                 example: 13:00:01
 *               location_x:
 *                 type: number
 *                 example: 2.01
 *               location_y:
 *                 type: number
 *                 example: 1.03
 *     responses:
 *       200:
 *         description: A success message that the participation was created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed error.
 *                   example: Error while creating new user; access denied.
*/
router.post("/", participationController.create);
/**
 * @swagger
 * /participation/game/{id}:
 *   get:
 *     summary: Get all participations of the game with the given id.
 *     tags:
 *       - participation
 *     description: Returns an array of all the participations for a certain game.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the game.
 *         schema:
 *           type: integer 
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   participation_id:
 *                     type: integer
 *                     example: 3
 *                   location_time:
 *                     type: string
 *                     format: timestamp
 *                     example: 13:00:01
 *                   location_x:
 *                     type: number
 *                     example: 2.01
 *                   location_y:
 *                     type: number
 *                     example: 1.03
 * 
 *       404:
 *         description: Returns a message in case the game with the given id was not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed information.
 *                   example: No participations for game with id=123
*/
router.get("/game/:id", participationController.findAllGames)
/**
 * @swagger
 * /participation/player/{id}:
 *   get:
 *     summary: Get all participations of a player with the given id.
 *     tags:
 *       - participation
 *     description: Returns an array of all the participations of a certain player in all games.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the player.
 *         schema:
 *           type: integer 
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   participation_id:
 *                     type: integer
 *                     example: 3
 *                   location_time:
 *                     type: string
 *                     format: timestamp
 *                     example: 13:00:01
 *                   location_x:
 *                     type: number
 *                     example: 2.01
 *                   location_y:
 *                     type: number
 *                     example: 1.03
 * 
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
 *                   example: No player with id=123
*/
router.get("/player/:id", participationController.findAllPlayer);

module.exports = router;