import PersonalInfo from "./PersonalInfo/PersonalInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  const dataMyPosts = props.dataProfile.myPosts;
  return (
    <div className="profile">
      <PersonalInfo name="Andrew Hrohodza"/>
      <MyPosts dataMyPosts={dataMyPosts}/>
    </div>
  )
}

export default Profile;