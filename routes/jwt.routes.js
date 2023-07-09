const router = require("express").Router();
const auth = require('../middleware/auth.js');

/**
 * @swagger
 * /auth/protected:
 *   get:
 *     summary: Used to test the JWT authorization. 
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - auth
 *     description: Returns the payload of the generated JWT or an appropriate error. Use the lock symbol on the right to add a token for testing.
 *     responses:
 *       200:
 *         description: The JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJQYXNjYWwiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2ODg5MTg4OTYsImV4cCI6MTY4ODkyMDA5Nn0.PIn3WxUAqhuuXinBdgg2951-S7wfvPprfjtioYxm7SA
 *       403:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Access denied, no token provided!
*/
router.get('/protected', auth.checkToken, (req, res) => {
    const user = req.user;   //we can use the decoded JWT payload here

    res.status(200).send({ message: "Protected route accessed successfully." });
});
/**
 * @swagger
 * /auth/token:
 *   get:
 *     summary: Sends back a JWT generated with static content from auth.js
 *     tags:
 *       - auth
 *     description: Returns a JWT for testing.
 *     responses:
 *       200:
 *         description: The JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJQYXNjYWwiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2ODg5MTg4OTYsImV4cCI6MTY4ODkyMDA5Nn0.PIn3WxUAqhuuXinBdgg2951-S7wfvPprfjtioYxm7SA
*/
router.get('/token', (req, res) => {
    const token = auth.getToken();  //mock call ... we would normally add the passed information about the user in the payload of the token

    res.send({token});
});

module.exports = router;