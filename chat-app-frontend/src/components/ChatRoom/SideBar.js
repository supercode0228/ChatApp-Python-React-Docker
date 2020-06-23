import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import RoomItem from './RoomItem';
import RoomUserItem from './RoomUserItem';

class SideBar extends Component {
	state = {
    collapseOpen: true
	};
	
	// toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
	};
	
	
	render() {
		const { rooms, users, onRoomClick } = this.props;
		return (
			<>
				{/* Toggler */}
				<button
					className="chat-room__sidebar__hamburg"
					type="button"
					onClick={this.toggleCollapse}
				>
					<i className="fas fa-bars" />
				</button>
				<div
					className={`chat-room__sidebar ${this.state.collapseOpen ? 'd-block' : 'd-none'}`}
				>
					{/* Collapse */}
					<div>
						<h4 className="chat-room__sidebar__title">Chat Room</h4>
						<div className="chat-room__sidebar__items">
							<h5>Rooms</h5>
							<ul>
								{
									!isEmpty(rooms)
									?
									rooms.map(room => {
										return (
											<RoomItem
												data={room}
												key={room.id}
												onClick={onRoomClick}
											/>
										)
									})
									:
									<li>Please create Room.</li>
								}
							</ul>
						</div>
						<div className="chat-room__sidebar__items">
							<h5>Direct Users</h5>
							<ul>
								{
									!isEmpty(users)
									?
									users.map(user => {
										return (
											<RoomUserItem data={user} key={user.id} />
										)
									})
									:
									<p>No users.</p>
								}
							</ul>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default SideBar;

