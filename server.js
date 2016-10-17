const Koa = require('koa');
const files = require('koa-static');
const Server = require('http').Server;
const IO = require('socket.io');

const app = new Koa();
app.use(files('client/dist'));

const server = new Server(app.callback());
const io = new IO(server);

const history = [];

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        Object.assign(message, {
            time: Date(),
        });

        history.push(message);

        socket.emit('message', message);
    });
});

server.listen(3000);
