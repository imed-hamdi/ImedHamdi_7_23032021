'use strict';

const Post = require('../models/post');
exports.findAll = function (req, res) {
  Post.findAll(function (err, post) {
    if (err)
      res.send(err);

    res.send(post);
  });
};

exports.create = function (req, res) {
  const body = req.body;

  Post.create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err, message: " Invalid" })
    } else {
      return res.status(201).json({ message: "Succes" })
    }
  })
};
exports.update = function (req, res) {

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Post.update(req.params.id, new Post(req.body), function (err, post) {
      if (err) throw err;
      res.json({ error: false, message: 'Post successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  const id = req.params.id;
  Post.delete(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      return res.status(201).json({ message: "Succes" })

    }
  });
}
