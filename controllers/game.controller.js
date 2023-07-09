const db = require("../models/_seq.start");

const Game = db.games;

exports.create = (req, res) => {
    const newGame = {
        game_name: req.body.game_name,
        game_date: req.body.game_date,
        game_start: req.body.game_start,
        game_end: req.body.game_end,
        coach_id_view: req.body.coach_id_view,
        coach_id_create: req.body.coach_id_create,
    };

    Game.create(newGame).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a new game."
        });
    });
};

exports.findAll = (req, res) => {
    Game.findAll().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving games."
        });
    });
};

exports.findOne = (req, res) => {
    const game_id = req.params.id;

    Game.findByPk(game_id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Game with id=${game_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error retrieving game with id=${game_id}`
        });
    });
};

exports.update = (req, res) => {
    const game_id = req.params.id;

    Game.update(req.body, { where: { game_id: game_id }}).then(num => {
        if (num > 0) {
            res.send({
                message: "Game was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Game with id=${game_id}. The Game was not found or the body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating Game with id=${game_id}`
        });
    });
};