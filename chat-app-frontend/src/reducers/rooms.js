import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_ERROR
} from "../constants";
import initialState from "./initialState";

export default function fetchRoomsReducer(state = initialState.rooms, { type, payload }) {
  switch (type) {
    case FETCH_ROOMS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case FETCH_ROOMS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: payload.data,
      });
    case FETCH_ROOMS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: payload.error,
      });
    default:
      return state;
  }
};