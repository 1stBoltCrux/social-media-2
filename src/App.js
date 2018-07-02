import React, { Component } from 'react';
import Nav from './components/Nav.js'
import Profile from './components/Profile.js'
import FriendsList from './components/FriendsList.js'
import SuggestionList from './components/SuggestionList.js'
import PostContainer from './components/PostContainer.js'
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
      <Nav></Nav>
    <div className={styles.contentWrapper}>
      <Profile></Profile>
      <FriendsList></FriendsList>
      <SuggestionList></SuggestionList>
    <PostContainer/>
    </div>

    </div>
    );
  }
}

export default App;
