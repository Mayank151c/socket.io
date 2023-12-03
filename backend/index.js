const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', client => {
    console.log(client);
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
});

server.listen(4000);