import { all } from 'redux-saga/effects';
import roomsSaga from './rooms';
import roomUsersSaga from './room-users';

export default function* rootSaga() {
  yield all([
		roomsSaga(),
		roomUsersSaga(),
  ]);
};