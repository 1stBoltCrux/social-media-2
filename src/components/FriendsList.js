import React, {Component} from 'react';
import Friend from './Friend.js';

const friendArray = [
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
];


 function FriendsList() {

    return (
      <div className='friendslist-wrapper'>
        <div className='friendslist-post'>
          <input type='text' placeholder='post'/>
        </div>
        {friendArray.map((friend) =>
          <Friend
            name={friend.name}
            description={friend.description} />
        )}
      </div>
    );
}
 export default FriendsList;
