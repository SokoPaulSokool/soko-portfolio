const express = require('express');
const app = express();
var path = require('path');

const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, '/build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => console.log(`Gator app listening on port ${port} !`));