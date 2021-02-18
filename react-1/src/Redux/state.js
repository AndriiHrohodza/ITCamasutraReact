import {rerender} from "../rerender";

let state = {
  posts: [
    {id: 1, message: "How are you?", likes: 14},
    {id: 2, message: "It`s my first post", likes: 1}
  ],
  newPostText : 'Default',
  dialogs: [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Vova"},
    {id: 3, name: "Ira"},
    {id: 4, name: "Ola"},
    {id: 5, name: "Vika"}
  ],
  messages: [
    {id: 1, text: "Text1"},
    {id: 2, text: "TExt2"},
    {id: 3, text: "Text3"},
    {id: 4, text: "Text4"},
    {id: 5, text: "Text5"}
  ]
}

export const addPost = () => {
  const newPost = {
    id: state.posts.length + 1,
    message: state.newPostText,
    likes: 0
  }
  state.posts.push(newPost);
  rerender(state);
  state.newPostText = '';
}

export const updateTypingText = (text) => {
  state.newPostText = text;
  rerender(state);
}

export default state;