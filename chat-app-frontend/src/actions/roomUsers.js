import {
  FETCH_ROOM_USERS_REQUEST,
} from "../constants";


export const fetchRoomUsersRequest = (roomId) => {
  return {
		type: FETCH_ROOM_USERS_REQUEST,
		params: { roomId }
  };
};
