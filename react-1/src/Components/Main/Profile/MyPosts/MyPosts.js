import Post from "./Post/Post";

const PostsData = [
  {id: 1, message: "How are you?", likes: 14},
  {id: 2, message: "It`s my first post", likes: 1}
]

const PostItems = PostsData.map((postItem) => {
  return <Post message={postItem.message} likeCount={postItem.likes} key={postItem.id}/>
})

const MyPosts = () => {
  return (
    <ul className="main-posts">
      Posts
      {PostItems}
    </ul>
  )
}

export default MyPosts;