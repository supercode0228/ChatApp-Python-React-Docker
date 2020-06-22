import React from 'react';

import {
	InputGroup,
	InputGroupAddon,
	Input,
	Button
} from 'reactstrap';

const MessageInput = () => {
	return (
		<div className="chat-room__message__type">
			<InputGroup>
				<Input
					className="chat-room__message__type__input"
					placeholder="Type your message..."
				/>
				<InputGroupAddon addonType="append">
					<Button
						className="chat-room__message__type__send"
					>
						Send
					</Button>
				</InputGroupAddon>
			</InputGroup>
		</div>
	)
}

export default MessageInput;
