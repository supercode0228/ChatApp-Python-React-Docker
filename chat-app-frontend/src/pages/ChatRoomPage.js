import React, { Component } from 'react'
import { SideBar } from '../components/ChatRoom'
class ChatRoomPage extends Component {
	render() {
		return (
			<div className="chat-room">
				<SideBar />
				<div className="chat-room__message">
					<div className="chat-room__message__header">
					</div>
					<div className="chat-room__message_body">
					</div>
				</div>
			</div>
		)
	}
}

export default ChatRoomPage;
