import './App.css';
import logo from './assets/freelancer.svg'
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav"
import Main from "./Components/Main/Main"

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
