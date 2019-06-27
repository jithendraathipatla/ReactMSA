const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.exit();

  } else {
    console.log(`Server listening on http://localhost:${PORT}`);
  }
});
