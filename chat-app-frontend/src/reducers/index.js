import { combineReducers } from "redux";

import roomsReducer from "./rooms";

const appReducer = combineReducers({
  rooms: roomsReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;