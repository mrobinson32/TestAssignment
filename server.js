const express = require('express');
const app = express();
const path = require('path');

const HTTP_PORT = process.env.PORT || 8080;

app.set('view',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'views','about.html'));
});

app.listen(HTTP_PORT, () =>{
    console.log(`app listening on: ${HTTP_PORT}`)
});