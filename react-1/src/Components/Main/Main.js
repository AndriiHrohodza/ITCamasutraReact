import Profile from "./Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import Dialogs from "./Dialogs/Dialogs";

const Main = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Route path="/profile" component={Profile}/>
        <Route path="/dialogs" component={Dialogs}/>
      </div>
    </BrowserRouter>
  )
}

export default Main;