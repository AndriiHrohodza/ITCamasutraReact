import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <ul className="main-posts">
      Posts
      <Post message="How are you?" likeCount="14"/>
      <Post message="It`s my first post" likeCount="1"/>
    </ul>
  )
}

export default MyPosts;