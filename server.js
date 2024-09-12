const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
var cors = require('cors')


app.use(cors())


// A "dist" mappa kiszolgálása


app.use(express.static(path.join(__dirname, 'dist')));


app.get('/hello', (req, res) => {
  res.json({
    'hello': 'hello'
  })
})
// Minden más útvonal esetén az index.html kiszolgálása
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
