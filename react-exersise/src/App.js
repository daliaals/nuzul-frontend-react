import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/Navbar.css";
import Properties from "./pages/Properties";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
