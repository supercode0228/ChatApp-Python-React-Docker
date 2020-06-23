import {
	FETCH_ROOMS_REQUEST,
	FETCH_ROOMS_SUCCESS,
	FETCH_ROOMS_ERROR,
} from "../constants";

import { CALL_API } from "../middlewares/api";

export const fetchRoomsRequest = () => {
	const endpoint = "/api/rooms";
	return {
		[CALL_API]: {
			types: [
				FETCH_ROOMS_REQUEST,
				FETCH_ROOMS_SUCCESS,
				FETCH_ROOMS_ERROR,
			],
			endpoint,
			method: "GET",
		}
	};
};
