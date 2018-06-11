var express = require("express");

var router = express.Router();

// Import the model (info.js) to use its database functions.
var info = require("../models/info.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  info.all(function(data) {
    var hbsObject = {
      info: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/info", function(req, res) {
  info.create([
    "question", "answer"
  ], [
    req.body.question, req.body.answer
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.id });
  });
});

router.put("/api/info/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  info.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/info/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  info.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
