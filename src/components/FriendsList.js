import React, {Component} from 'react';
import Friend from './Friend.js';
import SearchFriend from './SearchFriend';
import styles from './friendslist.scss';




 export default class FriendsList extends React.Component {
   constructor(props){
     super(props);
     this.state = {friendArray: [
       {
         name: 'Bleb Bleeby',
         description: 'A truly awful friend.'
       },
       {
         name: 'Beep Booper',
         description: 'A truly fair-weather friend.'
       },
       {
         name: 'Merc Tango',
         description: 'A truly dangerous friend.'
       },
     ], friendSearch: ''}


     this.handleFilter = this.handleFilter.bind(this);
   }

   handleFilter(search){
    this.setState({friendSearch: search})
    console.log(this.state.friendSearch);
   }

   render() {
     const filterFriends = this.props.filterFriends;

    return (
      <div className={styles.friendsListWrapper}>
        <div className={styles.friendsListPost}>
          <SearchFriend onFilter={this.handleFilter}/>
      </div>
      {this.state.friendArray.map((friend, index) =>
        <Friend
          newState={this.state.friendSearch}
          onFilter={this.handleFilter}
          name={friend.name}
          description={friend.description}
          key={index}
        />
    )}
  </div>
);

   }

}
