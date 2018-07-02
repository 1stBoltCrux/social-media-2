import React, {Component} from 'react';
import styles from './suggestion.scss'

function Suggestion(props){
  return(
    <div className={styles.suggestionWrapper}>
      <div className={styles.suggestionImage}></div>
    <div className={styles.suggestionContent}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      <div className={styles.suggestionButton}><p>Button</p></div>
      </div>
    </div>
  );
}

export default Suggestion;
