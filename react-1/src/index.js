import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
  app: {
    main: {
      profile: {
        myPosts: {
          PostData: [
            {id: 1, message: "How are you?", likes: 14},
            {id: 2, message: "It`s my first post", likes: 1}
            ]
        }
      },
      dialog: {
        DialogsData: [
          {id: 1, name: "Andrew"},
          {id: 2, name: "Vova"},
          {id: 3, name: "Ira"},
          {id: 4, name: "Ola"},
          {id: 5, name: "Vika"}
        ],
        MessageData: [
          {id: 1, text: "Text1"},
          {id: 2, text: "TExt2"},
          {id: 3, text: "Text3"},
          {id: 4, text: "Text4"},
          {id: 5, text: "Text5"}
        ]
      }
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
