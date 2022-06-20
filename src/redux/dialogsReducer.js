const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Boris Razor" },
    { id: 2, name: "Dmitriy Zhabko" },
    { id: 3, name: "Andrey Prudov" },
    { id: 4, name: "Svetlana Pirogova" },
    { id: 5, name: "Sasha Sevko" },
    { id: 6, name: "Viktor Smith" },
    { id: 7, name: "John Wick" },
    { id: 8, name: "Alexandr Beresnevich jr." },
  ],
  messages: [
    { id: 1, message: "Hi", isMine: false },
    { id: 2, message: "Yo", isMine: true },
    { id: 3, message: "How is your React", isMine: false },
    { id: 4, message: "Check it yourself", isMine: true },
    { id: 5, message: "let's c", isMine: false },
    { id: 6, message: "not c, js", isMine: true },
    { id: 7, message: "got it", isMine: false },
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
