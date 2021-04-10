import { combineReducers, createStore } from "redux"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"
import { usersReducer } from "./users"

const reducers = combineReducers({
  messagesReducer,
  conversationsReducer,
  usersReducer
});

export const store = createStore(reducers);
