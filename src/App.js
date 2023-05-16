import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/Header';
import NavBar from './components/leftSide/NavBar';
import Profile from './components/contentRightSide/Profile';

const App = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
