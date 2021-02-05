import PersonalInfo from "./PersonalInfo/PersonalInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="profile">
      <PersonalInfo name="Andrew Hrohodza"/>
      <MyPosts/>
    </div>
  )
}

export default Profile;