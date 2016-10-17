import { handleActions } from 'redux-actions';
import update from 'react-addons-update';

import {
    receiveMessage,
} from './actions';

export default handleActions({
    [receiveMessage]: (state, action) => update(state, {
        messages: { $push: [action.payload] },
    }),
}, {
    messages: [],
    users: [],
});
