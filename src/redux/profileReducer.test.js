import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "15" },
    { id: 2, message: "It's my first post", likesCount: "20" },
    { id: 3, message: "Bla", likesCount: "11" },
    { id: 4, message: "Dada", likesCount: "2" },
  ],
};

test("length to be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("testing string");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectations
  expect(newState.posts.length).toBe(5);
});

test("text to be correct", () => {
  // 1. test data
  let action = addPostActionCreator("testing string");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectations
  expect(newState.posts[4].message).toBe("testing string");
});

test("length to be decremented", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectations
  expect(newState.posts.length).toBe(3);
});

test("would not change length after deleting with wrong id", () => {
  // 1. test data
  let action = deletePost(100);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectations
  expect(newState.posts.length).toBe(4);
});
