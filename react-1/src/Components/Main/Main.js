import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Main = (props) => {
  const dataProfile = props.mainData.profile;
  const dataDialogs = props.mainData.dialog;
  
  return (
    <div className="main">
      <Route path="/profile" render={ () => <Profile dataProfile={dataProfile}/> }/>
      <Route path="/dialogs" render={ () => <Dialogs dataDialogs={dataDialogs}/> }/>
    </div>
  )
}

export default Main;