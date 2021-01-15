const express = require('express');
const app = express()
const path = require('path')
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('./src/'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('public/index.html'));
});

http.listen(3000, () => {
    console.log('listening on *: 3000');
});