import React, {Component} from 'react';

function Nav(){
  return (
    <div className='nav-wrapper'>
      <div className='nav-buttons'>
        <p>Home</p>
        <p>Notifications</p>
        <p>Messages</p>
      </div>

      <div className='nav-search'>
        <input type='text' placeholder='Search'/>
        <p>Tweet</p>
      </div>

    </div>
  )
}

export default Nav;
