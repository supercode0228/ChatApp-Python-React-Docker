import { call, put, takeLatest } from "redux-saga/effects";
import {
	API_URL,
  FETCH_ROOM_USERS_REQUEST,
  FETCH_ROOM_USERS_SUCCESS,
	FETCH_ROOM_USERS_ERROR,
	ADD_ROOM_USERS_REQUEST,
  ADD_ROOM_USERS_SUCCESS,
  ADD_ROOM_USERS_ERROR,
} from "../constants";

const headers = {
	'Content-Type': 'application/json'
}

const api = (url, method='GET', body) => {
	return fetch(url, {method, headers, body}).then(response => response.json());
}

function* fetchRoomUsers(action) {
	const params = action.params;
  try {
		const data = yield call(api, `${API_URL}/api/room_users/${params.roomId}`);
    yield put({ type: FETCH_ROOM_USERS_SUCCESS, payload: {data}});
  } catch (e) {
    yield put({ type: FETCH_ROOM_USERS_ERROR, payload: { error: { errMsg: "API Fetch Error!" } }});
  }
}

function* postRoomUser(action) {
	const params = action.params;
  try {
    const data = yield call(
			api,
			`${API_URL}/api/room_users`,
			'POST',
			JSON.stringify(params)
		);
		if (data.status_code === 200) {
			yield put({ type: ADD_ROOM_USERS_SUCCESS, payload: {data}})
			const {data: fetchData} = yield call(api, `${API_URL}/api/room_users/${params.room_id}`);
			yield put({ type: FETCH_ROOM_USERS_SUCCESS, payload: {data: fetchData}});
			action.func()
		} else {
			yield put({ type: ADD_ROOM_USERS_ERROR, payload: { error: { errMsg: "User Not Exist!" } }});
			window.alert("User Not Exist!");
		}
  } catch (e) {
    yield put({ type: ADD_ROOM_USERS_ERROR, payload: { error: { errMsg: "API Fetch Error!" } }});
  }
}

export function* roomUserSaga() {
  yield takeLatest(ADD_ROOM_USERS_REQUEST, postRoomUser);
}

export function* roomUsersSaga() {
  yield takeLatest(FETCH_ROOM_USERS_REQUEST, fetchRoomUsers);
}
