import {
	FETCH_MESSAGES_REQUEST,
	FETCH_MESSAGES_SUCCESS,
	FETCH_MESSAGES_ERROR,
	ADD_MESSAGE_REQUEST,
	ADD_MESSAGE_SUCCESS,
	ADD_MESSAGE_ERROR,
} from "../constants";

import { CALL_API } from "../middlewares/api";

export const fetchMessagesRequest = (roomId) => {
	const endpoint = `/api/messages/${roomId}`;
	return {
		[CALL_API]: {
			types: [
				FETCH_MESSAGES_REQUEST,
				FETCH_MESSAGES_SUCCESS,
				FETCH_MESSAGES_ERROR,
			],
			endpoint,
			method: "GET",
		}
	};
};

export const postMessageRequest = (data) => {
	const endpoint = "/api/messages";
	return {
		[CALL_API]: {
			types: [
				ADD_MESSAGE_REQUEST,
				ADD_MESSAGE_SUCCESS,
				ADD_MESSAGE_ERROR,
			],
			endpoint,
			method: "POST",
			data
		}
	};
}
