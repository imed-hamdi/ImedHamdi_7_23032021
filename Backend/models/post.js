'use strict';
const dbConn = require('../dbcnn');

// Création  de l'objet Post 
var Post = function (post) {
    this.userId = post.userId;
    this.title = post.title;
    this.contained = post.contained;
    this.dateAdd = post.dateAdd;
};

// Créer un nouve au Post 
Post.create = function (newPost, result) {
    dbConn.query("INSERT INTO posts set ?", newPost, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {

            result(null, res.insertId);
        }
    });
};

// Trouver tout les Post 
Post.findAll = function (result) {
    dbConn.query("Select * from posts ORDER BY timestamp(dateAdd) DESC", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

// Trouver un seul Post via son Id
Post.findOne = function (id, result) {
    dbConn.query("Select * FROM posts WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

// Modifier un Post 
Post.update = function (id, post, result) {
    dbConn.query("UPDATE posts SET  contained=?,title=? WHERE id = ?", [post.contained, post.title, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// Effacer un Post 
Post.delete = function (id, result) {
    dbConn.query("DELETE FROM posts WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};
module.exports = Post;
