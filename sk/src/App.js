import './App.css';
import Navbar from "./components/Navbar";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import ServiceDetails from "./components/pages/ServiceDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/services" element={<ServiceDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
