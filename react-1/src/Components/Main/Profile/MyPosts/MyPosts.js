import Post from "./Post/Post";

const MyPosts = (props) => {
  const PostsData = props.dataMyPosts.PostData;
  const PostItems = PostsData.map((postItem) => {
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