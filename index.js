const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

app.use('*', (req, res) => {
  res.status(404).send('No resource found.')
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.exit();

  } else {
    console.log(`Server listening on http://localhost:${PORT}`);
  }
});
