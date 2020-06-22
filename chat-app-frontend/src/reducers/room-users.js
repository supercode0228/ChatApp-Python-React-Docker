import {
  FETCH_ROOM_USERS_REQUEST,
  FETCH_ROOM_USERS_SUCCESS,
	FETCH_ROOM_USERS_ERROR,
	ADD_ROOM_USERS_REQUEST,
  ADD_ROOM_USERS_SUCCESS,
  ADD_ROOM_USERS_ERROR,
} from "../constants";
import initialState from "./initialState";

export function fetchRoomUsersReducer(state = initialState.roomUsers, { type, payload }) {
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

export function postRoomUserReducer(state = initialState.roomUser, { type, payload }) {
  switch (type) {
    case ADD_ROOM_USERS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case ADD_ROOM_USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: payload.data,
      });
    case ADD_ROOM_USERS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: payload.error,
      });
    default:
      return state;
  }
};