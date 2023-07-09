const router = require("express").Router();
const userController = require("../controllers/user.controller.js");

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retrieve a list of all users.
 *     tags:
 *       - user
 *     description: This endpoint returns an array of all users stored in the database. 
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 type: object 
 *                 properties:
 *                   user_id:
 *                     type: integer
 *                     description: The user ID.
 *                     example: 0
 *                   email:
 *                     type: string
 *                     description: The user's email address.
 *                     example: john@doe.com
 *                   password_hash:
 *                     type: string
 *                     description: The hashed password of the user stored in the database.
 *                     example: $2a$12$WE/pomhfet9n3YrudiaRIO0pw0gzqd4bSwS2taOwK6cM9zTO6Yz6.
 *                   firstname:
 *                     type: string
 *                     description: The user's firstname.
 *                     example: John
 *                   lastname: 
 *                     type: string
 *                     description: The user's lastname.
 *                     example: Doe
*/
router.get("/", userController.findAll);
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Retrieve the user who has the given id.
 *     tags:
 *       - user
 *     description: This endpoint returns the user with the given id and an appropriate message if the user was not found.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the user to retrieve.
 *         schema:
 *           type: integer 
 *     responses:
 *       200:
 *         description: The user with the given id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: integer
 *                   description: The user ID.
 *                   example: 0
 *                 email:
 *                   type: string
 *                   description: The user's email address.
 *                   example: john@doe.com
 *                 password_hash:
 *                   type: string
 *                   description: The hashed password of the user stored in the database.
 *                   example: $2a$12$WE/pomhfet9n3YrudiaRIO0pw0gzqd4bSwS2taOwK6cM9zTO6Yz6.
 *                 firstname:
 *                   type: string
 *                   description: The user's firstname.
 *                   example: John
 *                 lastname: 
 *                   type: string
 *                   description: The user's lastname.
 *                   example: Doe
 *       404:
 *         description: Returns a message with the given id if no user was found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with given id.
 *                   example: Cannot find User with id=3123
*/
router.get("/:id", userController.findOne);
/**
 * @swagger
 * /user/:
 *   post:
 *     summary: Creates a new user according to the values passed 
 *     tags:
 *       - user
 *     description: This endpoint creates a new user with an automatiacally created id and returns the created user if successful. It can be seen as the route for registering a new user.
 *     requestBody:
 *       description: The user object to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password_hash
 *               - firstname
 *               - lastname
 *             optional:
 *               - code_value
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@doe.at
 *               password_hash:
 *                 type: string
 *                 example: f0fda58630310a6dd91a7d8f0a4ceda2
 *               firstname:
 *                 type: string
 *                 example: John
 *               lastname:
 *                type: string
 *                example: Doe
 *               coach_code:
 *                 type: integer
 *                 description: If a coach code is provided, it is proved against the codes table and if the code is valid, the user is not a player but a coach and therefore has more permissions.
 *                 example: 66752
 *     responses:
 *       200:
 *         description: The user with the given id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: integer
 *                   description: The user ID.
 *                   example: 0
 *                 email:
 *                   type: string
 *                   description: The user's email address.
 *                   example: john@doe.com
 *                 password_hash:
 *                   type: string
 *                   description: The hashed password of the user stored in the database.
 *                   example: $2a$12$WE/pomhfet9n3YrudiaRIO0pw0gzqd4bSwS2taOwK6cM9zTO6Yz6.
 *                 firstname:
 *                   type: string
 *                   description: The user's firstname.
 *                   example: John
 *                 lastname: 
 *                   type: string
 *                   description: The user's lastname.
 *                   example: Doe
 *       500:
 *         description: Returns a message in case there was a problem while creating the user (database etc.).
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
router.post("/", userController.create);
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Checks whether the passed credentials belong to a user.
 *     tags:
 *       - user
 *     description: This endpoint checks the passed credentials (email and hashed password) and returns either the user they belong to or an appropriate error.
 *     requestBody:
 *       description: The user object to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password_hash
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@doe.at
 *               password_hash:
 *                 type: string
 *                 example: f0fda58630310a6dd91a7d8f0a4ceda2
 *     responses:
 *       200:
 *         description: The user data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: integer
 *                   description: The user ID.
 *                   example: 0
 *                 email:
 *                   type: string
 *                   description: The user's email address.
 *                   example: john@doe.com
 *                 firstname:
 *                   type: string
 *                   description: The user's firstname.
 *                   example: John
 *                 lastname: 
 *                   type: string
 *                   description: The user's lastname.
 *                   example: Doe
 *       401:
 *         description: Appropriate error if the credentials were wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed error.
 *                   example: Wrong credentials for user with email=john@doe.at
*/
router.post("/login", userController.login);
/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Updates all fields of a specific user 
 *     tags:
 *       - user
 *     description: Updates all fields passed in the body of the request of a specific user with the given id.
 *     parameters:
 *       - in: path   
 *         name: id
 *         required: true
 *         description: id of the user that should be updated.
 *         schema:
 *           type: integer 
 *     requestBody:
 *       description: The attributes of the user object that should be updated.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password_hash:
 *                 type: string
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *     responses:
 *       200:
 *         description: An information that the user was updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed information.
 *                   example: The user was updated successfully.
 *       404:
 *         description: Returns a message in case the user with the given id was not found or the body was empty.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message with detailed information.
 *                   example: Cannot update User with id=3123. The User was not found or the body is empty!
*/
router.put("/:id", userController.update);

module.exports = router;