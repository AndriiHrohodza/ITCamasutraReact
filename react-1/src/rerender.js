import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateTypingText} from "./Redux/state";

export const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updateTypingText={updateTypingText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
