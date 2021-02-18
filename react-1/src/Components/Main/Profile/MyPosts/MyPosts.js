import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
  const PostItems = props.dataMyPosts.posts.map((postItem) => {
    return <Post message={postItem.message} likeCount={postItem.likes} key={postItem.id}/>
  })
  
  const newPostElem = React.createRef();
  
  const addPost = () => {
    props.addPost();
  }

  const updateTypingText = () => {
    const value = newPostElem.current.value;
    props.updateTypingText(value);
  }
  
 
  return (
    <div className="myPosts">
      <div className="textArea">
        <textarea ref={newPostElem} value={props.dataMyPosts.newPostText} onChange={updateTypingText}/>
      </div>
      <button className="textArea-btn" onClick={ addPost }>
        Add post
      </button>
      <ul className="main-posts">
        Posts
        {PostItems}
      </ul>
    </div>

  )
}

export default MyPosts;