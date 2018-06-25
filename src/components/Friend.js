import React, {Component} from 'react';
import PropTypes from "prop-types";


 function Friend(props)  {
    return (
      <div className='friend-wrapper'>
        <div className='friend-image'></div>
        <div className='friend-description'>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>


      </div>
    );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Friend;
