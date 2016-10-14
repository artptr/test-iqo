const Koa = require('koa');
const files = require('koa-static');
const Server = require('http').Server;
const IO = require('socket.io');

const app = new Koa();
app.use(files('client/dist'));

const server = Server(app.callback());
const io = IO(server);

io.on('connection', socket => {
    socket.on('message', message => {
        console.log(message);
    });
    
    setTimeout(() => {
        socket.emit('message', { name: 'John Doe', text: 'qwerty' });
    }, 1000);
});

server.listen(3000);
