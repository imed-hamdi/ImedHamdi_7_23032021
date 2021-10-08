'use strict';
const dbConn = require('../dbcnn');

// Création  de l'objet Commentaire 
var Commentary = function (commentary) {
    this.userId = commentary.userId;
    this.userName = commentary.userName;
    this.postId = commentary.postId;
    this.contained = commentary.contained;
    this.dateAdd = commentary.dateAdd;
};

// Créer un nouveau commentaire
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



// Effacer un commentaire 
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
