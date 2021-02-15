const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

const port = '8000';


app.use(express.static(path.join(__dirname, '/client/src')));

const task = [
    {id:10, value: 'read book'}
];

  
app.get('/', (req,res) => {
    res.send('All is Good').status(200);
})

const server = app.listen(port, () => {
    console.log('Port is running on ' + port);
})

app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
  });

//SOCKET-SERVER-SET-UP
const io = socket(server);

io.on('connection', (socket) => {
    console.log('socket id ' + socket.id + 'has arrived');
    socket.emit('update Task', task);
    socket.on('newTask', (newTask) => {
        console.log('New Task');
        socket.broadcast.emit('newTask', console.log('Task Arrived'))
    })
})
