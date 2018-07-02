import React from 'react';
import styles from './postcontainer.scss';
import EditForm from './EditForm.js'
import Post from './Post.js'

export default class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
      postArray: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);

  }
  handleClick() {
    this.setState(prevState => ({
      editForm: !prevState.editForm
    }));
  }

  handleAddingNewPost(newPost){
    const newPostArray = this.state.postArray.slice();
    newPostArray.push(newPost);
    this.setState({postArray: newPostArray, editForm: false});
    console.log(this.state)
  }


  render(){
    let editForm = null;
    if(this.state.editForm === true){
      editForm = <EditForm
        onAddingNewPost = {this.handleAddingNewPost}
      />
    } else {
      editForm = null;
    }
    return(
      <div className={styles.postContainerWrapper}>
        <div onClick={this.handleClick} className={styles.formButton}>
          <p>Make a New Post</p>
        </div>
      { this.state.postArray.map((post, index)=>

        <Post
          post={post.post}
        />
      )}
          <div className={styles.postContent}>



        </div>
        {editForm}
      </div>
    )
  }
}
