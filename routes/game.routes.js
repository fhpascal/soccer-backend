const router = require("express").Router();
const gameController = require("../controllers/game.controller.js");

/**
 * @swagger
 * /game:
 *   get:
 *     summary: Retrieve a list of all games.
 *     tags:
 *       - game
 *     description: This endpoint returns an array of all games stored in the database. 
 *     responses:
 *       200:
 *         description: A list of games.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 type: object 
 *                 properties:
 *                   game_id:
 *                     type: integer
 *                     example: 0
 *                   game_name:
 *                     type: string
 *                     example: Game#1
 *                   game_date:
 *                     type: string
 *                     format: date
 *                     description: The date when the game took place.
 *                   game_start:
 *                     type: string
 *                     format: timestamp
 *                     description: The time of the game's start.
 *                     example: 11:20
 *                   game_end: 
 *                     type: string
 *                     format: timestamp
 *                     description:  The time of the game's end.
 *                     example: 12:30
*/
router.get("/", gameController.findAll);
/**
 * @swagger
 * /game/{id}:
 *   get:
 *     summary: Retrieve the game that has the given id.
 *     tags:
 *       - game
 *     description: This endpoint returns the game with the given id and an appropriate message if the game was not found.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the game to retrieve.
 *         schema:
 *           type: integer 
 *     responses:
 *       200:
 *         description: The game with the given id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 game_id:
 *                   type: integer
 *                   example: 0
 *                 game_name:
 *                   type: string
 *                   example: Game#1
 *                 game_date:
 *                   type: string
 *                   format: date
 *                   description: The date when the game took place.
 *                 game_start:
 *                   type: string
 *                   format: timestamp
 *                   description: The time of the game's start.
 *                   example: 11:20:00
 *                 game_end: 
 *                   type: string
 *                   format: timestamp
 *                   description:  The time of the game's end.
 *                   example: 12:30:00
 *       404:
 *         description: Returns a message with the given id if no game was found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with given id.
 *                   example: Cannot find Game with id=3123
*/
router.get("/:id", gameController.findOne);
/**
 * @swagger
 * /game/:
 *   post:
 *     summary: Creates a new game according to the values passed 
 *     tags:
 *       - game
 *     description: This endpoint creates a new game with an automatiacally created id and returns the created game if successful.
 *     requestBody:
 *       description: The game object to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - game_name
 *               - game_date
 *               - game_start
 *               - coach_id_view
 *               - coach_id_create
 *             properties:
 *               game_name:
 *                 type: string
 *                 example: Game#1
 *               game_date:
 *                 type: string
 *                 format: date
 *                 description: The date when the game took place.
 *               game_start:
 *                 type: string
 *                 format: timestamp
 *                 description: The time of the game's start.
 *                 example: 11:20:00
 *               game_end: 
 *                 type: string
 *                 format: timestamp
 *                 description:  The time of the game's end.
 *                 example: 12:30:00
 *               coach_id_view:
 *                 type: integer
 *                 description: The id of the coach who is allowed to view the game.
 *                 example: 2
 *               coach_id_create:
 *                 type: integer
 *                 description: The id of the coach who created the game.
 *                 example: 2
 *     responses:
 *       200:
 *         description: The user with the given id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 game_name:
 *                   type: string
 *                   example: Game#1
 *                 game_date:
 *                   type: string
 *                   format: date
 *                   description: The date when the game took place.
 *                 game_start:
 *                   type: string
 *                   format: timestamp
 *                   description: The time of the game's start.
 *                   example: 11:20:00
 *                 game_end: 
 *                   type: string
 *                   format: timestamp
 *                   description:  The time of the game's end.
 *                   example: 12:30:00
 *                 coach_id_view:
 *                   type: integer
 *                   description: The id of the coach who is allowed to view the game.
 *                   example: 2
 *                 coach_id_create:
 *                   type: integer
 *                   description: The id of the coach who created the game.
 *                   example: 2
 *       500:
 *         description: Returns a message in case there was a problem while creating the gamr (database etc.).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed error.
 *                   example: Error while creating new game; access denied.
*/
router.post("/", gameController.create);
/**
 * @swagger
 * /game/{id}:
 *   put:
 *     summary: Updates all fields of a specific game 
 *     tags:
 *       - game
 *     description: Updates all fields passed in the body of the request of a specific game with the given id.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the game that should be updated.
 *         schema:
 *           type: integer 
 *     requestBody:
 *       description: The attributes of the game object that should be updated.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_name:
 *                 type: string
 *                 example: Game#22
 *               game_date:
 *                 type: string
 *                 format: date
 *                 description: The date when the game took place.
 *               game_start:
 *                 type: string
 *                 format: timestamp
 *                 description: The time of the game's start.
 *                 example: 15:00:00
 *               game_end: 
 *                 type: string
 *                 format: timestamp
 *                 description:  The time of the game's end.
 *                 example: 19:30:00
 *     responses:
 *       200:
 *         description: An information that the game was updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed information.
 *                   example: The game was updated successfully.
 *       404:
 *         description: Returns a message in case the game with the given id was not found or the body was empty.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed information.
 *                   example: Cannot update game with id=221. The game was not found or the body is empty!
*/
router.put("/:id", gameController.update);

module.exports = router;