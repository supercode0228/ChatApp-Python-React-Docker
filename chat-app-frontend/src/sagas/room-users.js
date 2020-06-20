import { call, put, takeLatest } from "redux-saga/effects";
import {
	API_URL,
  FETCH_ROOM_USERS_REQUEST,
  FETCH_ROOM_USERS_SUCCESS,
  FETCH_ROOM_USERS_ERROR,
} from "../constants";

const api = (url) => fetch(url).then(response => response.json());

export function* fetchRoomUsers(action) {
	const params = action.params;
  try {
    const data = yield call(api, `${API_URL}/api/room_users/${params.roomId}`);
    yield put({ type: FETCH_ROOM_USERS_SUCCESS, payload: {data}});
  } catch (e) {
    yield put({ type: FETCH_ROOM_USERS_ERROR, payload: { error: { errMsg: "API Fetch Error!" } }});
  }
}

function* roomUsersSaga() {
  yield takeLatest(FETCH_ROOM_USERS_REQUEST, fetchRoomUsers);
};

export default roomUsersSaga;