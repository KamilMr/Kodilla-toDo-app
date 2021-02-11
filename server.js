const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

const port = process.env.PORT || 8000;

// app.use(express.static(path.join(__dirname, './client/src')));

const task = [
    {id: 10, value: 'buy bread'}
];

app.get('*', (req,res) => {
    res.send('All is Good').status(200);
})

const server = app.listen(process.env.PORT || port, () => {
    console.log('Port is running on ' + port);
})

app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
  });

const io = socket(server);

io.on('connection', (socket) => {
    socket.on('newTask', (newTask) => {
        console.log('New Task');
        socket.broadcast.emit('newTask', console.log('Task Arrived'))
    })
})
