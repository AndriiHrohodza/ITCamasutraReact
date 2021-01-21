import Wall from "./Wall/Wall";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="profile">
      <Wall/>
      <PersonalInfo/>
      <MyPosts/>
    </div>
  )
}

export default Profile;