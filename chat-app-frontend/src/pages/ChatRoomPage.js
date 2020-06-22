import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty } from 'lodash';

import { SideBar, RoomJoinDlg, MessageInput } from '../components/ChatRoom';
import {
	roomActions,
	roomUsersActions
} from '../actions';

class ChatRoomPage extends Component {
	constructor() {
		super();
		this.state = {
			selectedRoom: {},
			modalRJDlg: false,
			isJoin: false
		};
	}
	componentDidMount() {
		this.props.roomActions.fetchRoomsRequest();
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
		const { roomUsersActions } = this.props;
		roomUsersActions.postRoomUserRequest(params, this._resetCall);
	}

	_resetCall = () => {
		this.onRJDlgToggle();
		this.setState({
			isJoin: true,
			modalRJDlg: false
		})
	}
	
	render() {
		const {
			selectedRoom,
			modalRJDlg,
			isJoin
		} = this.state;

		const {
			rooms,
			roomUsers
		} = this.props;

		return (
			<div className="chat-room">
				<SideBar
					rooms={!isEmpty(rooms.data) ? rooms.data.data : []}
					users={!isEmpty(roomUsers.data) ? roomUsers.data : []}
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
							<div className="chat-room__message_body">
								<MessageInput />
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
		roomUser: state.roomUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
		roomActions: bindActionCreators(roomActions, dispatch),
		roomUsersActions: bindActionCreators(roomUsersActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomPage);
