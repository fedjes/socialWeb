import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/Header';
import NavBar from './components/leftSide/NavBar';
import Profile from './components/contentRightSide/Profile';
import Dialogs from './components/contentRightSide/Messages/Messages';
import Music from './components/contentRightSide/Music/Music';
import Friends from './components/contentRightSide/Friends/Friends';
import News from './components/contentRightSide/News/News';
import Settings from './components/contentRightSide/Settings/Settings';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        <NavBar />
        <div className='appWrapperContent'>
          <Routes>
            <Route path='/messages' element={<Dialogs state={props.state.messagesPage} />} />
            <Route path='/profile' element={<Profile state={props.state.profilePage.pData} />} />
            <Route path='/music' element={<Music />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
