const express = require('express');
const dotenv = require('dotenv');
const referralRoutes = require('./src/routes/routes');
const errorHandler = require('./utils/errorHandler');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', referralRoutes);

// Error handler middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
