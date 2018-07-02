import React from 'react';
import styles from './post.scss';

export default function Post(props){
  return(
    <div className={styles.postCard}>
      {props.post}
    </div>
  )
}
