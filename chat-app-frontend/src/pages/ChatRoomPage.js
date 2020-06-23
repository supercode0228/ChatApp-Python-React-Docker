import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty } from 'lodash';

import {
	SideBar,
	RoomJoinDlg,
	MessageInput,
	MessageItem,
} from '../components/ChatRoom';
import {
	roomActions,
	roomUsersActions,
	messagesActions,
} from '../actions';
import socket from '../utils/socket';

class ChatRoomPage extends Component {
	constructor() {
		super();
		this.state = {
			selectedRoom: {},
			modalRJDlg: false,
			isJoin: false,
			messages: [],
		};
	}

	messagesEndRef = React.createRef();

	componentDidMount() {
		const { roomActions } = this.props;
		roomActions.fetchRoomsRequest();
		socket.on('chat_received', (data) => {
			const user = JSON.parse(localStorage.getItem('user'));
			if (user.room_id === data.room_id) {
				const updated = [
					...this.state.messages,
					{...data}
				]
				this.setState({ messages: updated });
			}
			this.scrollToBottom();
		});
	}

	onRoomClick = (e, room) => {
		this.onRJDlgToggle();
		this.setState({ selectedRoom: room });
	}

	onRJDlgToggle = () => {
		this.setState({
			modalRJDlg: !this.state.modalRJDlg
		});
	}

	onSubmitJoin = (params) => {
		const { roomUsersActions, messagesActions } = this.props;
		roomUsersActions.postRoomUserRequest(params).then(() => {
			localStorage.setItem('user', JSON.stringify(this.props.roomUser.data.data));
			roomUsersActions.fetchRoomUsersRequest(params.room_id);
			messagesActions.fetchMessagesRequest(params.room_id).then(() => {
				this.setState({
					isJoin: true,
					modalRJDlg: false,
					messages: this.props.messages.data.data
				});
				this.scrollToBottom();
			});
		});
	}

	onSendMsg = (e, message) => {
		e.preventDefault();
		
		const { messagesActions, roomUser } = this.props;
		const params = {
			room_id: roomUser.data.data.room_id,
			sender_id: roomUser.data.data.user_id,
			content: message,
		}
		messagesActions.postMessageRequest(params).then(() => {
			const data = this.props.message.data.data
			socket.emit('chat_send', data);
		});
	}

	scrollToBottom = () => {
		this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	}
	
	render() {
		const {
			selectedRoom,
			modalRJDlg,
			isJoin,
			messages,
		} = this.state;

		const {
			rooms,
			roomUsers,
		} = this.props;

		return (
			<div className="chat-room">
				<SideBar
					rooms={!isEmpty(rooms.data) ? rooms.data.data : []}
					users={!isEmpty(roomUsers.data) ? roomUsers.data.data : []}
					onRoomClick={this.onRoomClick}
				/>
				{
					(isEmpty(selectedRoom) || !isJoin)
					?
					(
						<div className="chat-room__message-inactive">
							<h3>Please select Room or User.</h3>
						</div>
					)
					:
					(
						<div className="chat-room__message">
							<div className="chat-room__message__header">
								<h4>{selectedRoom.name}</h4>
							</div>
							<div className="chat-room__message__body">
								<div className="chat-room__message__body__content">
									{
										!isEmpty(messages) &&
										messages.map(message => {
											return (
												<MessageItem data={message} key={message.id} />
											)
										})
									}
									<div ref={this.messagesEndRef} />
								</div>
								<MessageInput onSendMsg={this.onSendMsg}/>
							</div>
						</div>
					)
				}
				<RoomJoinDlg
					modalRJDlg={modalRJDlg}
					room_id={selectedRoom.id}
					room_name={selectedRoom.name}
					onSubmit={this.onSubmitJoin}
					onToggle={this.onRJDlgToggle}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
		rooms: state.rooms,
		roomUsers: state.roomUsers,
		roomUser: state.roomUser,
		messages: state.messages,
		message: state.message,
  }
};

const mapDispatchToProps = dispatch => {
  return {
		roomActions: bindActionCreators(roomActions, dispatch),
		roomUsersActions: bindActionCreators(roomUsersActions, dispatch),
		messagesActions: bindActionCreators(messagesActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomPage);
