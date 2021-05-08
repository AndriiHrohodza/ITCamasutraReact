let store = {
  _state: {
    posts: [
      {id: 1, message: "How are you?", likes: 14},
      {id: 2, message: "It`s my first post", likes: 1}
    ],
    newPostText: 'Default',
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
  },
  _callSubscriber() {
    console.log("_callSubscriber");
  },
  addPost() {
    let self = this;
    const newPost = {
      id: this._state.posts.length + 1,
      message: this._state.newPostText,
      likes: 0
    }
    this._state.posts.push(newPost);
    this._callSubscriber();
    this._state.newPostText = '';
  },
  updateTypingText(text) {
    this._state.newPostText = text;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  }
}

export default store;