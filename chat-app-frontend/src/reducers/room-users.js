import {
  FETCH_ROOM_USERS_REQUEST,
  FETCH_ROOM_USERS_SUCCESS,
	FETCH_ROOM_USERS_ERROR,
	ADD_ROOM_USERS_REQUEST,
  ADD_ROOM_USERS_SUCCESS,
  ADD_ROOM_USERS_ERROR,
} from "../constants";
import initialState from "./initialState";

export function fetchRoomUsersReducer(state = initialState.roomUsers, action) {
  switch (action.type) {
    case FETCH_ROOM_USERS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case FETCH_ROOM_USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.data,
      });
    case FETCH_ROOM_USERS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export function postRoomUserReducer(state = initialState.roomUser, action) {
  switch (action.type) {
    case ADD_ROOM_USERS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case ADD_ROOM_USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.data,
      });
    case ADD_ROOM_USERS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};