import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <p>Hello</p>
      <h1>h1</h1>
      <Footer />
    </div>
  );
}

const Header = () => {
  return(
    <div className="Header">
      <p>Header</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div className="Footer">
      <p>Footer</p>
    </div>
  )
}

export default App;
