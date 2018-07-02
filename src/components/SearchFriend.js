import React from 'react';
import styles from './searchfriend.scss'


export default function SearchFriend(props) {
  let _search = null;

  function handleNewSearch(event){
    event.preventDefault();
    props.onFilter(_search.value)
  }
  return(
    <div>
      <input id='search' type='text' placeholder='Search Friends'
        ref={(input) => {_search = input;}}
      />
    <div onClick={handleNewSearch} className={styles.submitButton}>SUBMIT</div>
    </div>
  );
}
