import React from 'react';
import styles from './editform.scss';

export default function EditForm(props) {

    let _post = null;

    function handleNewPost(event) {
      event.preventDefault();
      props.onAddingNewPost({post: _post.value})
      _post.value = '';
    }
    
    return(
      <div className={styles.postButtonWrapper}>
        <div className={styles.postButton}>
          <textarea
            className={styles.postText}
            id='post'
            placeholder='Write your Post Dingus'
            ref={(textarea) => {_post = textarea;}}/>
          <button onClick={handleNewPost} className={styles.postButton} type='submit'>Post</button>
        </div>
      </div>
    );

}
