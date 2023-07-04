const db = require("../models");

const User = db.users;

exports.create = (req, res) => {
    const newUser = {
        email: req.body.email,
        password_hash: req.body.password_hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    User.create(newUser).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while a new user."
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

exports.update = (req, res) => {
    const user_id = req.params.id;

    User.update(req.body, { where: { user_id: user_id }}).then(num => {
        if (num == 1) {
            res.send({
                message: "User was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update User with id=${user_id}. Maybe User was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating User with id=${user_id}`
        });
    });
};