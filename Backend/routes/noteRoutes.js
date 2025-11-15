const express = require('express');
const jwt = require('jsonwebtoken');
const { Note } = require('../models/index');
const router = express.Router();

// inline auth middleware
function auth(req, res, next) {
  const raw = req.headers['authorization'];
  if (!raw) return res.status(401).json({ msg: 'No token' });
  try {
    const token = raw.startsWith('Bearer ') ? raw.slice(7) : raw;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.studentId = decoded.id;
    next();
  } catch (e) { return res.status(401).json({ msg: 'Invalid token' }); }
}

// Create
router.post('/', auth, async (req, res) => {
  try {
    const { title, message, date } = req.body;
    if(!title || !message) return res.status(400).json({msg:'Title & message required'});
    const note = await Note.create({ title, message, date, studentId: req.studentId });
    res.json(note);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Read (own notes)
router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.findAll({ where: { studentId: req.studentId }, order: [['createdAt','DESC']] });
    res.json(notes);
  } catch (e) { res.status(500).json({ error: e.message }); }
});88888

// Update (own note)
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, message, date } = req.body;
    const [count] = await Note.update(
      { title, message, date },
      { where: { id: req.params.id, studentId: req.studentId } }
    );
    if (!count) return res.status(404).json({ msg: 'Note not found' });
    res.json({ msg: 'Updated' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Delete (own note)
router.delete('/:id', auth, async (req, res) => {
  try {
    const count = await Note.destroy({ where: { id: req.params.id, studentId: req.studentId } });
    if (!count) return res.status(404).json({ msg: 'Note not found' });
    res.json({ msg: 'Deleted' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;