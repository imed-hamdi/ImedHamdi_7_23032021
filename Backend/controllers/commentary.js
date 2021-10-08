'use strict';

const Commentary = require('../models/commentary');

exports.findAll = function (req, res) {
    Commentary.findAll(function (err, commentary) {
        if (err)
            res.send(err);
        res.send(commentary);
    });
};

exports.create = function (req, res) {
    const body = req.body;
    Commentary.create(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err, message: " Invalid" })
        } else {
            return res.status(201).json({ message: "Succes" })
        }
    })
};

exports.delete = function (req, res) {
    const id = req.params.id;
    Commentary.delete(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            return res.status(201).json({ message: "Succes" })
        }
    });
}
