import {
	FETCH_ROOM_USERS_REQUEST,
	FETCH_ROOM_USERS_SUCCESS,
	FETCH_ROOM_USERS_ERROR,
	ADD_ROOM_USERS_REQUEST,
	ADD_ROOM_USERS_SUCCESS,
	ADD_ROOM_USERS_ERROR,
} from "../constants";

import { CALL_API } from "../middlewares/api";

export const fetchRoomUsersRequest = (roomId) => {
	const endpoint = `/api/room_users/${roomId}`;
	return {
		[CALL_API]: {
			types: [
				FETCH_ROOM_USERS_REQUEST,
				FETCH_ROOM_USERS_SUCCESS,
				FETCH_ROOM_USERS_ERROR,
			],
			endpoint,
			method: "GET",
		}
	};
};

export const postRoomUserRequest = (data) => {
	const endpoint = "/api/room_users";
	return {
		[CALL_API]: {
			types: [
				ADD_ROOM_USERS_REQUEST,
				ADD_ROOM_USERS_SUCCESS,
				ADD_ROOM_USERS_ERROR,
			],
			endpoint,
			method: "POST",
			data
		}
	};
}
