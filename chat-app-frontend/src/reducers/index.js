import { combineReducers } from 'redux';

import roomsReducer from './rooms';
import { fetchRoomUsersReducer, postRoomUserReducer } from './room-users';
import { fetchMessagesReducer, postMessageReducer } from './messages';

const appReducer = combineReducers({
	rooms: roomsReducer,
	roomUsers: fetchRoomUsersReducer,
	roomUser: postRoomUserReducer,
	messages: fetchMessagesReducer,
	message: postMessageReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;