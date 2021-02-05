import wallImage from "../../../../assets/wall.jpg";

const PersonalInfo = (props) => {
  return (
    <div className="profile">
      <div className="wall">
        <img src={wallImage} alt="wall"/>
      </div>
      {props.name}
    </div>
  )
}

export default PersonalInfo;