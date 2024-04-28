const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../views/' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});