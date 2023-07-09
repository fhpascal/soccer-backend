const db = require("../models/_seq.start");

const Participation = db.participates_in;

exports.create = (req, res) => {
    const newParticipation = {
        player_id: req.body.player_id,
        game_id: req.body.game_id,
        location_time: req.body.location_time,
        location_x: parseFloat(req.body.location_x),    //improve that in terms of error handling and appropriate feedback
        location_y: parseFloat(req.body.location_y)
    };

    console.log(newParticipation.location_x);

    Participation.create(newParticipation).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a new participation."
        });
    });
};