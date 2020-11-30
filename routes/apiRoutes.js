const router = require("express").Router();
const store = require("../db/store");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST "/api/notes" 
// Use addNote in the store object
// YOUR CODE HERE
router.post("/api/notes", (req, res) => {
  store
    .addNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
// Use removeNote method in the store object
// YOUR CODE HERE
router.delete("/api/notes/:id", (req, res) => {
  store
    .removeNotes(req.params.id)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});



module.exports = router;
