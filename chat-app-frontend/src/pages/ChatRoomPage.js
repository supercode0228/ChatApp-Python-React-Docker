import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; 
import { SideBar } from '../components/ChatRoom'

import { roomActions } from '../actions';
class ChatRoomPage extends Component {
	componentDidMount() {
		this.props.roomActions.fetchRoomsRequest();
	}
	
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

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    roomActions: bindActionCreators(roomActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomPage);
