import {
	FETCH_ROOM_USERS_REQUEST,
	ADD_ROOM_USERS_REQUEST,
} from "../constants";


export const fetchRoomUsersRequest = (roomId) => {
  return {
		type: FETCH_ROOM_USERS_REQUEST,
		params: { roomId }
  };
};

export const postRoomUserRequest = (params, func) => {
	return {
		type: ADD_ROOM_USERS_REQUEST,
		params,
		func
	}
}
