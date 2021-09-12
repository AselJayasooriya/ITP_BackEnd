const db = require("../models");
const Note = db.notes;

// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const note = new Note({
        pNoteId: req.body.pNoteId,
        pNoteName: req.body.pNoteName,
        pNoteMessage: req.body.pNoteMessage,
    });

    // Save Note in the database
    note
        .save(note)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Note."
            });
        });

};

// Retrieve all Notes from the database.
exports.findAll = (req, res) => {

};

// Find a single Note with an id
exports.findOne = (req, res) => {

};

// Update a Note by the id in the request
exports.update = (req, res) => {

};

// Delete a Note with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Note from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Notes
exports.findAllPublished = (req, res) => {

};