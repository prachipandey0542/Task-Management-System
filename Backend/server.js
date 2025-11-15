require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); 
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

const PORT = process.env.PORT ||5000;
app.listen(PORT, async () => {
  try { await sequelize.authenticate(); console.log('DB connected'); }
  catch(e){ console.error('DB error:', e.message); }
  console.log(`Server running on ${PORT}`);
});