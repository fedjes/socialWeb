import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/state';
import {BrowserRouter} from 'react-router-dom';
import {addPost, changePost} from './components/redux/state';


export let rerenderApp = (state) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} addPost={addPost} changePost={changePost}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};

reportWebVitals();
