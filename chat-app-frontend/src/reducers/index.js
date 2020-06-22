import { combineReducers } from 'redux';

import roomsReducer from './rooms';
import { fetchRoomUsersReducer, postRoomUserReducer } from './room-users';

const appReducer = combineReducers({
	rooms: roomsReducer,
	roomUsers: fetchRoomUsersReducer,
	roomUser: postRoomUserReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;