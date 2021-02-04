import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Main = () => {
  return (
    <div className="main">
      <switch>
        <Route path="/profile" component={Profile}/>
        <Route path="/dialogs" component={Dialogs}/>
      </switch>
    </div>
  )
}

export default Main;