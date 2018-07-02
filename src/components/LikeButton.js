import React from 'react';
import styles from './likebutton.scss';

export default class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {liked: false}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('working');
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  }

  render(){
    let liked = null;
    if (this.state.liked === true){
      liked = 'LIKED';
    } else {
      liked = null;
    }
    return(
      <div className={styles.likeButtonWrapper}>
        <p onClick={this.handleClick}>LIKE</p>
      <p>{liked}</p>
      </div>


    );
  }
}
