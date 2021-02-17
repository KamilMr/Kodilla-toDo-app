const { clear } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

const port = '8000';


app.use(express.static(path.join(__dirname, '/client/src')));

const tasks = [];
const users = [];
  
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
    socket.emit('updateData', tasks);


    socket.on('newTask', (newTask) => {
        tasks.push(...newTask);
        socket.broadcast.emit('updateData', newTask);
    })
    socket.on('removeTask', (taskId) => {
        let index = tasks.map(task => task.id).indexOf(taskId);
        tasks.splice(index, 1);
        socket.broadcast.emit('removeTask', tasks);
    })
    socket.on('disconnect', () => console.log(socket.id + ' has left'))
})
