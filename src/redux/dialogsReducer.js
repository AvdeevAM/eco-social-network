const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi", isMine: true },
    { id: 2, message: "How is your it-kamasutra?", isMine: false },
    { id: 3, message: "Yo", isMine: true },
    { id: 4, message: "Yo", isMine: false },
    { id: 5, message: "Yo", isMine: true },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: state.messages.length + 1,
        message: action.message,
        isMine: true,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export default dialogsReducer;
