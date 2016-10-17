import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers';
import App from './components/App';
import Messenger from './messenger';

const store = createStore(
    reducers,
    applyMiddleware(
        promiseMiddleware
    )
);

Messenger.init(store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
