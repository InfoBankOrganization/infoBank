// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var info = {
  all: function(cb) {
    orm.all("question", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("question", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("question", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("question", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (Controller.js).
module.exports = info;
