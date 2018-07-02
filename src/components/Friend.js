import React, {Component} from 'react';
import PropTypes from "prop-types";
import styles from './friend.scss';
import LikeButton from './LikeButton.js';


 function Friend(props) {
console.log(props.newState);
if (props.newState === props.name || props.newState === '') {
  return (
    <div className={styles.friendWrapper}>
      <div className={styles.friendImage}></div>
    <div className={styles.friendDescription}>
      <h3>{props.name}</h3>
    <p>{props.description}</p>
</div>
<LikeButton/>
</div>
);
} else {
  return '';
}
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};


export default Friend;
