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
exports.getAll = (req, res) => {
    Note.find()
        .then((data) => {
            res.json(data);
            //console.log(data);
        })
        .catch((err) => {
            alert(err);
        });
};