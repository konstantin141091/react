import { ADD_USER } from "./types";

// params {author, message, roomId}
export const addUser = (params) => {
  return {
    type: ADD_USER,
    payload: params,
  };
};
