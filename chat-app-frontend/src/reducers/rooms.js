import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_ERROR
} from "../constants";
import initialState from "./initialState";

export default function fetchRoomsReducer(state = initialState.rooms, action) {
  switch (action.type) {
    case FETCH_ROOMS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case FETCH_ROOMS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.data,
      });
    case FETCH_ROOMS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};