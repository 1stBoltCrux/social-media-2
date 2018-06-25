import React, {Component} from 'react';
import Suggestion from './Suggestion.js'

function SuggestionList(){
  return(
    <div className='suggestionlist-wrapper'>
      <h3>Suggestion List</h3>
      <Suggestion/>
    </div>
  );
}

export default SuggestionList;
