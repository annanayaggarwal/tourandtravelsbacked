const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const packageRoutes = require('./routes/packageRoutes');
const authRoutes = require('./routes/userRoutes');
const queryRoutes = require('./routes/queryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://anniagg2003:annanay123456@chat-app.k7eirmx.mongodb.net/?retryWrites=true&w=majority&appName=chat-app/chaardhaam", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/packages',packageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/queries', queryRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));