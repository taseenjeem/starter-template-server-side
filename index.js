// Import required modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware to enable CORS
app.use(cors());

// Define a route for the homepage
app.get("/", (req, res) => {
  res.json({ message: "Server side" });
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
