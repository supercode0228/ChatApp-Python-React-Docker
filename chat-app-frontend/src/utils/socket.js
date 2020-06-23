import {API_URL} from '../constants';

import io from 'socket.io-client';
const socket = io.connect(API_URL);

export default socket;