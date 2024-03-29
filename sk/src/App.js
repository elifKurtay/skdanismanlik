import './App.css';
import Navbar from "./components/Navbar";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
