const db = require("../models/_seq.start");

const Player = db.players;

exports.create = (req, res) => {
    const newPlayer = {
        date_of_birth: req.body.date_of_birth,
        player_number: req.body.player_number,
        player_position: req.body.player_position,
        user_id: req.body.user_id
    };
    
    Player.create(newPlayer).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating a new player."
        });
    });
};

exports.findOne = (req, res) => {
    const player_id = req.params.id;

    Player.findByPk(player_id, { include: ["user"] }).then((player) => {
        res.send(player);
      })
      .catch((err) => {
         res.status(500).send({
            message: `Error retrieving code with id=${code_id} - ${err}`
        });
    });
};