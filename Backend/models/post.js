'use strict';
const dbConn = require('../dbcnn');
var Post = function (post) {
    this.userId = post.userId;
    this.title = post.title;
    this.contained = post.contained;
    this.dateAdd = post.dateAdd;
};
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
Post.findAll = function (result) {
    dbConn.query("Select * from posts", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('posts : ', res);
            result(null, res);
        }
    });
};
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

Post.delete = function (id, userid, userlevel, results) {
    if (userlevel === 1) {

        dbConn.query("DELETE FROM posts WHERE id = ? ", [id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                results(null, err)
            } else
                results(null, res)
            return results

        });


    } else {
        dbConn.query("DELETE FROM posts WHERE id = ? AND userId = ? ", [id, userid], function (err, res) {
            if (err) {
                console.log("error: ", err);
                results(null, err)
            } else
                results(null, res)
            return results

        });
    }
};
module.exports = Post;
