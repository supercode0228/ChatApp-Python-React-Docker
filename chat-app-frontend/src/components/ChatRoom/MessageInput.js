import React, { Component } from 'react';

import {
	InputGroup,
	InputGroupAddon,
	Input,
	Button
} from 'reactstrap';

class MessageInput extends Component {
	constructor() {
		super();
		this.state={
			message: '',
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { message } = this.state;
		const { onSendMsg } = this.props;

		return (
			<div className="chat-room__message__type">
				<InputGroup>
					<Input
						name="message"
						className="chat-room__message__type__input"
						placeholder="Type your message..."
						onChange={this.onChange}
						value={message}
					/>
					<InputGroupAddon addonType="append">
						<Button
							className="chat-room__message__type__send"
							onClick={(e) => onSendMsg(e, message)}
						>
							Send
						</Button>
					</InputGroupAddon>
				</InputGroup>
			</div>
		)
	}
}

export default MessageInput;
