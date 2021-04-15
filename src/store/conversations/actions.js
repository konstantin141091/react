import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_CONVERSATION } from "./types"

export const addConversation = (contact) => {
  return {
    type: ADD_CONVERSATION,
    payload: contact,
  }
};

export const changeValue = (id, value) => {
  return {
    type: CHANGE_VALUE,
    payload: { id, value },
  }
};

export const deleteConversation = (id) => {
  return {
    type: DELETE_CONVERSATION,
    payload: { id }
  }
};
