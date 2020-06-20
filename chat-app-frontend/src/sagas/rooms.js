import { call, put, takeLatest } from "redux-saga/effects";
import {
	API_URL,
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_ERROR,
} from "../constants";

const api = (url) => fetch(url).then(response => response.json());

export function* fetchRooms() {
  try {
    const data = yield call(api, `${API_URL}/api/rooms`);
    yield put({ type: FETCH_ROOMS_SUCCESS, payload: {data}});
  } catch (e) {
    yield put({ type: FETCH_ROOMS_ERROR, payload: { error: { errMsg: "API Fetch Error!" } }});
  }
}

function* roomsSaga() {
  yield takeLatest(FETCH_ROOMS_REQUEST, fetchRooms);
};

export default roomsSaga;