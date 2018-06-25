import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Profile from './components/Profile.js'
import FriendsList from './components/FriendsList.js'
import SuggestionList from './components/SuggestionList.js'

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
      <Nav></Nav>
    <div className='content-wrapper'>
      <Profile></Profile>
      <FriendsList></FriendsList>
      <SuggestionList></SuggestionList>
    </div>

    </div>
    );
  }
}

export default App;
