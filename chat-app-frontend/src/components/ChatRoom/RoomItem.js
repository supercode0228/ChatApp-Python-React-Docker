import React from 'react'

const RoomItemComponent = ({ data, onClick }) => {
	return (
		<li onClick={(e) => onClick(e, data)}>
			<i className="fas fa-hashtag" />
			<span>&nbsp;&nbsp;{data.name}</span>
		</li>
	)
}

export default RoomItemComponent