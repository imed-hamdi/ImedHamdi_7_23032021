'use strict';

const Post = require('../models/post');
exports.findAll = function (req, res) {
  Post.findAll(function (err, post) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', post);
    res.send(post);
  });
};

exports.create = function (req, res) {
  const body = req.body;

  Post.create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: " Invalid" })
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
  let body = req.body;
  let userid = body.userId;
  let userlevel = body.userLevel
  Post.delete(req.params.id, userid, userlevel, function (err, post) {
    if (err) {
      res.send(err);
    } else if (post.affectedRows === 1) {
        return res.json({ message: 'valide' })
      } else {
        return res.json({ message: ' NOt Valide' })
      }
    res.send();
  })
}
