import Post from "./Post/Post";

const MyPosts = (props) => {
  console.log("props", props.dataMyPosts);
  const PostItems = props.dataMyPosts.map((postItem) => {
    return <Post message={postItem.message} likeCount={postItem.likes} key={postItem.id}/>
  })
  
  return (
    <ul className="main-posts">
      Posts
      {PostItems}
    </ul>
  )
}

export default MyPosts;