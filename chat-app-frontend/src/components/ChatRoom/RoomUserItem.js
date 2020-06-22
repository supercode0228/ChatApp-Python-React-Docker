import React from 'react'

const RoomUserItem = ({ data, onClick }) => {
	return (
		<li onClick={(e) => onClick(e, data.user)}>
			<i className="fas fa-hashtag" />
			<span>&nbsp;&nbsp;{data.user.name}</span>
		</li>
	)
}

export default RoomUserItem