import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Main = (props) => {
  return (
    <div className="main">
      <Route path="/profile" render={ () => <Profile profileState={props.mainState}/> }/>
      <Route path="/dialogs" render={ () => <Dialogs dialogsState={props.mainState}/> }/>
    </div>
  )
}

export default Main;