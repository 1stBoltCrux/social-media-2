import React, { Component } from 'react';
import styles from './profile.scss'
function Profile() {
  return(
    <div className={styles.profileWrapper}>
      <div className={styles.profileTop}>
        <div className={styles.blueBox}></div>
      <div className={styles.whiteBox}>
          <h3>Ted Leary</h3>
        <div className={styles.profileButtons}>
            <p>TWEETS</p>
            <p>FOLLOWING</p>
            <p>FOLLOWERS</p>
          </div>
        </div>
        <div className={styles.profileImage}>

        </div>
      </div>
      <div className={styles.profileBottom}>
        <p>this is my profile my god what have i done, do dolor do maodknsadfs sdkfsdmm,, asfjef fturn me off its happening o gogofooofoffofo
        this is my profile my god what have i done, do dolor do maodknsadfs sdkfsdmm,, asfjef fturn me off its happening o gogofooofoffofo
      this is my profile my god what have i done, do dolor do maodknsadfs sdkfsdmm,, asfjef fturn me off its happening o gogofooofoffofo</p>

      </div>

    </div>
  );
}

export default Profile;
