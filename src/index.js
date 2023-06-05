import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rerenderApp } from './render';
import state from './components/redux/state';



rerenderApp(state);


reportWebVitals();
