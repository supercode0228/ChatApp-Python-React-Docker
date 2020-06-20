import { all } from "redux-saga/effects";
import roomsSaga from "./rooms";

export default function* rootSaga() {
  yield all([
    roomsSaga(),
  ]);
};