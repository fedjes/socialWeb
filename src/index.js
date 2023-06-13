import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './components/redux/state';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderApp = (state) => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} addPost={store.addPost.bind(store)} changePost={store.changePost.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderApp(store.getState());
reportWebVitals();

store.subscribe(rerenderApp);