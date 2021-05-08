import PersonalInfo from "./PersonalInfo/PersonalInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div className="profile">
      <PersonalInfo name="Andrew Hrohodza"/>
      <MyPosts store={props.store} state={props.store.getState()} addPost={props.store.addPost.bind(props.store)} updateTypingText={props.store.updateTypingText.bind(props.store)}/>
    </div>
  )
}

export default Profile;