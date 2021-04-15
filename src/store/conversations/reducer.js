import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_CONVERSATION } from "./types"

const initialState = [
  { title: "room1", value: "" },
  { title: "test-room2", value: "" },
  { title: "room3", value: "" },
];

export const conversationsReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ADD_CONVERSATION:
      return [...state, { title: payload, value: "" }];
    case CHANGE_VALUE:
      return state.map((room) =>
        room.title === payload.id ? { ...room, value: payload.value } : room,
      );
    case DELETE_CONVERSATION:
      return state.forEach(item => {
        if (item.title === payload.id) {
          delete state[item];
        }
      });
    default:
      return state
  }
};


