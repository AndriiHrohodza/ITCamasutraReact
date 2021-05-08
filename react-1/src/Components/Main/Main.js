import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Main = (props) => {
  return (
    <div className="main">
      <Route path="/profile"
             render={ () => <Profile store={props.store}/> }/>
      <Route path="/dialogs" render={ () => <Dialogs dialogs={props.store.getState().dialogs} messages={props.store.getState().messages}/> }/>
    </div>
  )
}

export default Main;