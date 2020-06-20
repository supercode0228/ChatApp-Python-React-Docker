import {
  FETCH_ROOM_USERS_REQUEST,
  FETCH_ROOM_USERS_SUCCESS,
  FETCH_ROOM_USERS_ERROR
} from "../constants";
import initialState from "./initialState";

export default function fetchRoomUserssReducer(state = initialState.roomUsers, { type, payload }) {
  switch (type) {
    case FETCH_ROOM_USERS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case FETCH_ROOM_USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: payload.data,
      });
    case FETCH_ROOM_USERS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: payload.error,
      });
    default:
      return state;
  }
};