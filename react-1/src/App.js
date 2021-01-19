import './App.css';
import logo from './assets/freelancer.svg'
import Header from "./Components/Header";
import Nav from "./Components/Nav"
import Main from "./Components/Main"

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
