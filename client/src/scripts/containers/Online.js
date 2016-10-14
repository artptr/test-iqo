import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let Online = ({ users }) => (
    <div className="box box-default">
        <div className="box-header with-border">
            <h3 className="box-title"><i className="fa fa-users" /> Online</h3>
        </div>
        <div className="box-body">
            <ul className="nav nav-stacked">
                {users.map(user => <li>{user.name}</li>)}
            </ul>
        </div>
    </div>
);

Online.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Online = connect(
    store => ({
        users: store.users,
    })
)(Online);

export default Online;
