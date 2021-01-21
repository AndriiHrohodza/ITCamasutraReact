const Post = (props) => {
  return (
    <li>
      <div>{props.message}</div>
      <span>{props.likeCount}
        { props.likeCount > 1 ? 'Likes' : 'Like' }</span>
    </li>
  )
}

export default Post;