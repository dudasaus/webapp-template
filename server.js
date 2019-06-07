/**
 * Express server that statically serves a dsitrubtion directory
 */
const express = require('express');

// Distribution directory and default port
const distribution = 'dist';
const PORT = process.env.PORT || 8000;

// Start the server
const app = express();
app.use(express.static(distribution));
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));