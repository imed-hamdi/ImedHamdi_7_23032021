'use strict';
const dbConn = require('../dbcnn');

// Création  de l'objet Post 
var Commentary = function (commentary) {
    this.userId = commentary.userId;
    this.userName = commentary.userName;
    this.postId = commentary.postId;
    this.contained = commentary.contained;
    this.dateAdd = commentary.dateAdd;
};

// Créer un nouve au Post 
Commentary.create = function (newCommentary, result) {
    dbConn.query("INSERT INTO commentary set ?", newCommentary, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};

// Trouver tout les Commentaires
Commentary.findAll = function (result) {
    dbConn.query("Select * from commentary ORDER BY timestamp(dateAdd) DESC", function (err, res) {
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
Commentary.findOne = function (id, result) {
    dbConn.query("Select * FROM commentary WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};


// Effacer un Post 
Commentary.delete = function (id, result) {
    dbConn.query("DELETE FROM commentary WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};
module.exports =Commentary;
