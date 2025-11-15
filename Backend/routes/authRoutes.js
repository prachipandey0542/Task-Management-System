const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Student } = require('../models/index');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password) return res.status(400).json({msg:'All fields required'});
    const exists = await Student.findOne({ where: { email } });
    if (exists) return res.status(400).json({ msg: 'Email already exists' });

    const hash = await bcrypt.hash(password, 10);
    const s = await Student.create({ name, email, password: hash });
    res.json({ msg: 'Registration Successfil..!', id: s.id, name: s.name, email: s.email });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const s = await Student.findOne({ where: { email } });
    if (!s) return res.status(400).json({ msg: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, s.password);
    if (!ok) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: s.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ msg: 'Login success', token, name: s.name });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;