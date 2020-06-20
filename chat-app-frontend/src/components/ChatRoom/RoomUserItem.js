import React from 'react'

const RoomUserItem = ({ data, onClick }) => {
	return (
		<li onClick={(e) => onClick(e, data.id)}>
			<i className="fas fa-hashtag" />
			<span>&nbsp;&nbsp;{data.users.name}</span>
		</li>
	)
}

export default RoomUserItem