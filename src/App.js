import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const intro = "Welcome to my first detailed React App!";
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Home/>
      </div>
    </div>
  );
}

export default App;
