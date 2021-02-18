import PersonalInfo from "./PersonalInfo/PersonalInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {;
  return (
    <div className="profile">
      <PersonalInfo name="Andrew Hrohodza"/>
      <MyPosts dataMyPosts={props.profileState} addPost={props.addPost} updateTypingText={props.updateTypingText}/>
    </div>
  )
}

export default Profile;