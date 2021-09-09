'use strict';
const cryptoJS = require('crypto-js');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config()
exports.findAll = function (req, res) {
  User.findAll(function (err, user) {
    if (err)
      res.send(err);
    console.log('res', user);
    res.send(user);
  });
};

exports.login = function (req, res) {
  const body = req.body;
  var useremail = cryptoJS.MD5(body.email).toString();
  var userpassword = cryptoJS.MD5(body.password).toString();
  User.login(useremail, userpassword, (err, results) => {
    if (err) {
      console.log(err);

    } else {
      if (results.length > 0) {

        res.status(200).json({
          userId: body.id,
          token: jwt.sign(
            { userId: body.id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
          ),
          message: "Connexion Valide",
         user : results[0]
        });

      } else {
        return res.status(500).json({ message: " Email/Password Invalid" })
      }

    }

  });

}


exports.Signup = function (req, res) {
  const body = req.body;
  body.email = cryptoJS.MD5(body.email);
  body.password = cryptoJS.MD5(body.password);
  User.Signup(body, (err, result) => {
    if (err) {
      res.json({ message: " Invalid User", error: err })
    } else {
      res.json({ message: "User successfully added" });

    }
  })
};


exports.findById = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
exports.update = function (req, res) {
  const body = req.body;
  body.password = cryptoJS.MD5(body.password).toString();
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    User.update(req.params.id, new User(req.body), function (err, user) {
      if (err) throw err;
      res.json({ error: false, message: 'User successfully updated' });
    });
  }
};
exports.delete = function (req, res) {
  User.delete(req.params.id, function (err, user) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'user successfully deleted' });
  });
};