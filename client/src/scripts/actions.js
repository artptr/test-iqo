import { createAction } from 'redux-actions';
import uuid from 'node-uuid';

import Messenger from './messenger';

export const sendMessage = createAction('SEND_MESSAGE', (message) => {
    Messenger.sendMessage({
        key: uuid.v4(),
        name: 'John Doe',
        text: message,
    });
});

export const receiveMessage = createAction('RECEIVE_MESSAGE');
