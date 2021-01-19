import MyPosts from "./MyPosts/MyPosts";
import Wall from "./Wall/Wall";
import Profile from "./Profile/Profile";

const Main = () => {
  return (
    <div className="main">
      <Wall/>
      <Profile/>
      <MyPosts/>
    </div>
  )
}

export default Main;