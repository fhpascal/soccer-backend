const jwt = require("jsonwebtoken");
const logger = require("../helper/logger.js");

exports.checkToken = (req, res, next) => {
    try {
        const header = req.headers["authorization"];    
        
        if(header){
            const token = header.split(' ')[1]; //by defintion of JWT, it is stored as a Bearer token (Bearer JWTvalue)
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);   //use the secret to check whether the token is still valid and has not changed (integrity)
        
            req.user = decoded;

            next();
        } else {
            logger.warn("no appropriate token was provided")
            return res.status(403).send({ message: "Access denied, no token provided!" });
        }
    } catch (error) {
        logger.error("in auth " + error);
        
        //do not give details back to the user
        res.status(400).send("Invalid token");
    }
};

exports.getToken = () => {
    const token = jwt.sign(
        {id: 1, username: "Pascal", role: "ADMIN"},
        process.env.JWT_TOKEN,  //individual secret used to check it later
        {
            expiresIn: process.env.JWT_EXPIRE   //expire time of the token
        }
    );
        
    return token;
};