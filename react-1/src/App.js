import './App.css';
import logo from './assets/freelancer.svg'
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav"
import Main from "./Components/Main/Main"
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Main store={props.store}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
