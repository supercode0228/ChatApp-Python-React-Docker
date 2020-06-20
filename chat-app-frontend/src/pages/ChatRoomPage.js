import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { SideBar } from '../components/ChatRoom';
import {
	roomActions,
	roomUsersActions
} from '../actions';

class ChatRoomPage extends Component {
	componentDidMount() {
		this.props.roomActions.fetchRoomsRequest();
	}

	onRoomClick =(e, roomId) => {
		this.props.roomUsersActions.fetchRoomUsersRequest(roomId);
	}
	
	render() {
		const { rooms, roomUsers } = this.props;
		return (
			<div className="chat-room">
				<SideBar
					rooms={rooms.data.data}
					users={roomUsers.data.data}
					onRoomClick={this.onRoomClick}
				/>
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

const mapStateToProps = state => {
  return {
		rooms: state.rooms,
		roomUsers: state.roomUsers
  }
};

const mapDispatchToProps = dispatch => {
  return {
		roomActions: bindActionCreators(roomActions, dispatch),
		roomUsersActions: bindActionCreators(roomUsersActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomPage);
