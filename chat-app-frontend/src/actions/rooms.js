import {
  FETCH_ROOMS_REQUEST,
} from "../constants";


export const fetchRoomsRequest = () => {
  return {
    type: FETCH_ROOMS_REQUEST,
  };
};
