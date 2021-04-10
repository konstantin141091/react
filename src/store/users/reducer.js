const initialState = [
  {
    name: "User",
    email: "user@mail.ru",
    age: 20
  },
  {
    name: "User2",
    email: "user2@mail.ru",
    age: 22
  },
  {
    name: "User3",
    email: "user3@mail.ru",
    age: 21
  },
  {
    name: "User4",
    email: "user4@mail.ru",
    age: 30
  },
];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};
