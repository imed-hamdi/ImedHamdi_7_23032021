'use strict';
const dbConn = require('../dbcnn');

var User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.password = user.password;
  this.dateCreation = user.dateCreation;
};

User.login = function (useremail, userpassword,result) {
  dbConn.query('SELECT * FROM users WHERE email = ? AND password = ?', [useremail, userpassword], function (error, results) {
    if (error) {
      console.log(error);
      result(error, null);
    } else {
      if (results.length > 0) {
        if (useremail === results[0].email) {
          if (userpassword === results[0].password) {
           result(null, results);

          }
        }
      } else {
        result(null,results);
        
      }
    }

  });
};

User.Signup = function (newUser, result) {
  dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
    if (err) {
    
      result(err, null);
    }
    else {

      result(null, res.insertId);
    }
  });
};
User.findById = function (id, result) {
  dbConn.query("Select * from users where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
User.findAll = function (result) {
  dbConn.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('users : ', res);
      result(null, res);
    }
  });
};

User.update = function (id, user, result) {
  dbConn.query("UPDATE users SET  password=? WHERE id = ?", [user.password, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

User.delete = function (id, result) {
  dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
module.exports = User;