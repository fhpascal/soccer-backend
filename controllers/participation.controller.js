const db = require("../models/_seq.start");
const playerModel = require("../models/player.model");

const Participation = db.participates_in;
const Games = db.games;

exports.create = (req, res) => {
    const newParticipation = {
        player_id: req.body.player_id,
        game_id: req.body.game_id,
        location_time: req.body.location_time,
        location_x: parseFloat(req.body.location_x),    //improve that in terms of error handling and appropriate feedback
        location_y: parseFloat(req.body.location_y)
    };

    Participation.create(newParticipation).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a new participation."
        });
    });
};

//find all participations for a certain game
exports.findAllGames = (req, res) => {
    const game_id = req.params.id;

    Games.findAll({ 
        where:{ game_id: game_id }, //where condition as in SQL
        include: [db.participates_in], //used for join
        attributes: [] //do not include the game itself
    }).then(data => {
        if(data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No participations for game with id=${game_id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Some error occurred while getting the parcipitations for the game with id=${game_id}`
        });
    });
};

//find all participations for a certain player 
exports.findAllPlayer = (req, res) => {
    const player_id = req.params.id;

    Participation.findAll({ 
        where:{ player_id: player_id }, //where condition as in SQL
        include: [db.games], //used for join
    }).then(data => {
        if(data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No participations for player with id=${player_id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Some error occurred while getting the parcipitations for the player with id=${player_id}`
        });
    });
};