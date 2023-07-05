const db = require("../models/_seq.start");

const Code = db.codes;

exports.create = (req, res) => {
    const newCode = {
        code_value: req.body.code_value,
    };

    Code.create(newCode).then(data => {
        res.status(200).send({
            message: "The new code was successfully created."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a new code."
        });
    });
};

exports.findOne = (req, res) => {
    const code_id = req.params.id;

    Code.findByPk(code_id).then(data => {
        if (data) {
            res.send({"code_value" : data.code_value});
        } else {
            res.status(404).send({
                message: `Cannot find Code with id=${code_id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error retrieving code with id=${code_id} - ${err}`
        });
    });
};