import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Main = () => {
  return (
    <div className="main">
      <Route path="/profile" render={ () => <Profile /> }/>
      <Route path="/dialogs" render={ () => <Dialogs /> }/>
    </div>
  )
}

export default Main;