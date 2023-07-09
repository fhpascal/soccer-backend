const db = require("../models/_seq.start");

const Player = db.players;
const User = db.users;

exports.create = (req, res) => {
    //gets all the data necessary to create a player (and a user) and first creates the user.
    const newUser = {
        email: req.body.email,
        password_hash: req.body.password_hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    const newPlayer = {
        date_of_birth: req.body.date_of_birth,
        player_number: req.body.player_number,
        player_position: req.body.player_position,
    };

    //better use the function of the controller directly - tbd
    User.create(newUser).then(data => {
        if(data) {
            newPlayer.user_id = data.user_id;;

            Player.create(newPlayer).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating a new player."
                });
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a new user for the player."
        });
    });
};

exports.findOne = (req, res) => {
    const player_id = req.params.id;

    Player.findByPk(player_id, { include: ["user"] }).then((player) => {
        if(player) {
            res.send(player);
        } else {
            res.status(404).send({
                message: `Player with id=${player_id} does not exist!`
            });
        }
      })
      .catch((err) => {
         res.status(500).send({
            message: `Error retrieving code with id=${player_id} - ${err}`
        });
    });
};