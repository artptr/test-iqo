import React, { PropTypes } from 'react';

const Message = ({ name, time, text }) => (
    <div className="direct-chat-msg">
        <div className="direct-chat-info clearfix">
            <span className="direct-chat-name">{name}</span>
            <span className="direct-chat-timestamp">
                {time || <i className="fa fa-spinner fa-spin" />}
            </span>
        </div>
        <div className="direct-chat-avatar">{name[0]}</div>
        <div className="direct-chat-text">{text}</div>
    </div>
);

Message.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Message;
