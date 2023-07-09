const db = require("../models/_seq.start");

const User = db.users; 

exports.create = (req, res) => {
    const newUser = {
        email: req.body.email,
        password_hash: req.body.password_hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    };

    //check for coach
    const code_value = req.body.code_value;

    User.create(newUser).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a new user."
        });
    });
};

exports.findAll = (req, res) => {
    User.findAll().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.findOne = (req, res) => {
    const user_id = req.params.id;

    User.findByPk(user_id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find User with id=${user_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error retrieving user with id=${user_id}`
        });
    });
};

exports.login = (req, res) => {
    const user ={
        email: req.body.email,
        password_hash: req.body.password_hash
    };

    //use bcrypt.compareSync - need to try that with actual data from the frontend.
    User.findOne({where: {email: user.email, password_hash: user.password_hash}}).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(401).send({
                message: `Wrong credentials or wrong e-mail for user with e-mail=${user.email}.`
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({
            message: `Error checking credentials for user with e-mail=${user.email}`
        });
    });
};

exports.update = (req, res) => {
    const user_id = req.params.id;

    User.update(req.body, { where: { user_id: user_id }}).then(num => {
        if (num > 0) {
            res.send({
                message: "User was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update User with id=${user_id}. The User was not found or the body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating User with id=${user_id}`
        });
    });
};