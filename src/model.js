const db = require("./db");

const UserModel = function(userdata) {
  this.firstname = userdata.firstname;
  this.email = userdata.email;
  this.password = userdata.password;
};

UserModel.createNewUser = (userdata, result) => {
  db.query("INSERT INTO userdata SET ?", userdata, (err, res) => {
    if (err) {
      console.log("error in connecting to db", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = UserModel;
