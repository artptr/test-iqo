import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../actions';

import Message from '../components/Message';

class Chat extends PureComponent {
    constructor(props) {
        super(props);

        this.refInput = (node) => {
            this.input = node;
        };

        this.handleSend = (e) => {
            e.preventDefault();

            const msg = this.input.value;

            if (!msg.trim()) {
                return;
            }

            this.props.onSend(msg);
        };
    }

    render() {
        return (
            <div className="box box-primary direct-chat direct-chat-primary">
                <div className="box-header with-border">
                    <h3 className="box-title"><i className="fa fa-comments-o" /> Chat</h3>
                </div>
                <div className="box-body">
                    <div className="direct-chat-messages">
                        {this.props.messages.map(message => <Message {...message} />)}
                    </div>
                </div>
                <div className="box-footer">
                    <form onSubmit={this.handleSend}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Type Message..."
                                className="form-control"
                                ref={this.refInput}
                            />
                            <span className="input-group-btn">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-flat"
                                >Send</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSend: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        messages: state.messages,
    }),

    dispatch => ({
        onSend: msg => dispatch(sendMessage(msg)),
    })
)(Chat);
