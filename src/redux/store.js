// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: "Hi, how are you?", likesCount: "15" },
//         { id: 2, message: "It's my first post", likesCount: "20" },
//         { id: 3, message: "Bla", likesCount: "11" },
//         { id: 4, message: "Dada", likesCount: "2" },
//       ],
//       newPostText: "hello World",
//     },
//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: "Dimych" },
//         { id: 2, name: "Andrey" },
//         { id: 3, name: "Sveta" },
//         { id: 4, name: "Sasha" },
//         { id: 5, name: "Viktor" },
//         { id: 6, name: "Valera" },
//       ],
//       messages: [
//         { id: 1, message: "Hi", isMine: true },
//         { id: 2, message: "How is your it-kamasutra?", isMine: false },
//         { id: 3, message: "Yo", isMine: true },
//         { id: 4, message: "Yo", isMine: false },
//         { id: 5, message: "Yo", isMine: true },
//       ],
//       newMessageText: "",
//     },
//     sidebar: {
//       friends: [{ name: "Andrew" }, { name: "Sasha" }, { name: "Sveta" }],
//     },
//   },
//   _callSubscriber() {
//     console.log("state has been changed");
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     // observer pattern
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//     this._callSubscriber(this._state);
//   },
// };

// export default store;

// window.store = store;
