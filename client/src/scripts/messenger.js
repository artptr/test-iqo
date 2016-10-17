import io from 'socket.io-client';

import {
    receiveMessage,
} from './actions';

let dispatch;
let socket;

export default {
    init(store) {
        dispatch = store.dispatch;
        socket = io();

        socket.on('message', (message) => {
            dispatch(receiveMessage(message));
        });
    },

    sendMessage(message) {
        socket.emit('message', message);
    },
};
