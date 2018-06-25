import React, {Component} from 'react';
import styles from './nav.css'

console.log(styles);

function Nav(){
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navButtons}>
        <p>Home</p>
        <p>Notifications</p>
        <p>Messages</p>
      </div>

      <div className={styles.navSearch}>
        <input type='text' placeholder='Search'/>
        <p>Tweet</p>
      </div>

    </div>
  )
}

export default Nav;
