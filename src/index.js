import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/state';

// let state = {
//   dData: [
//     { id: 1, name: 'felis' },
//     { id: 2, name: 'martin' },
//     { id: 3, name: 'mom' },
//     { id: 4, name: 'bro' },
//   ],
//   mData: [
//     { id: 1, message: 'hi' },
//     { id: 2, message: 'ky' },
//     { id: 3, message: 'what' },
// ],
// pData: [
//   { id: 1, pMessage: 'test post', lokes: 3 },
//   { id: 1, pMessage: 'other post', lokes: 1 },
//   { id: 1, pMessage: 'more posts', lokes: 7 },
// ],
// };



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
