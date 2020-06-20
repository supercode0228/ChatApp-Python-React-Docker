import { combineReducers } from 'redux';

import roomsReducer from './rooms';
import roomUsersReducer from './room-users';

const appReducer = combineReducers({
	rooms: roomsReducer,
	roomUsers: roomUsersReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;