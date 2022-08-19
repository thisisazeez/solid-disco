
const App = require("../models/app.model.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const title = new App({
    title: req.body.title,
    body: req.body.body,
    imgurl: req.body.imgurl,
  });
  title
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  App.findById(req.params.titleId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.titleId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.titleId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.titleId,
      });
    });
};

// Update a message identified by the titleId in the request
exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.titleId,
    {
        title: req.body.title,
        body: req.body.body,
        imgurl: req.body.imgurl,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.titleId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.titleId,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.titleId,
      });
    });
};

// Delete a message with the specified titleId in the request
exports.delete = (req, res) => {
  App.findByIdAndRemove(req.params.titleId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.titleId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.titleId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.titleId,
      });
    });
};