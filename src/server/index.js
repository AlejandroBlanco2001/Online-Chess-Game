const express = require('express');
const app = express()
const path = require('path')
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Set up the Static files and they routes
app.use('/client',express.static(path.join(__dirname,'..','client')));
app.use('/src/Assets',express.static(path.join(__dirname,'..','Assets')))
app.use(express.static(path.join(__dirname,'..','..','public')));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('public/index.html'));
});

http.listen(3000, () => {
    console.log('listening on *: 3000');
});

io.on('connection', socket => {
    
})
