import React from 'react';

import Chat from '../containers/Chat';
import Online from '../containers/Online';

const App = () => (
    <div className="row">
        <div className="col-md-9">
            <Chat />
        </div>
        <div className="col-md-3">
            <Online />
        </div>
    </div>
);

export default App;
