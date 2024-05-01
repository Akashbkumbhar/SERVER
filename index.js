const express = require('express'); // Require the Express module
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define route for the root URL
app.get('/', (req, res) => {
  // Send the HTML file as the response
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 3000; // You can change this port if needed
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});