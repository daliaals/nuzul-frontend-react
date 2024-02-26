import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/Navbar.css";
import Properties from "./pages/Properties";
import Property from "./pages/Property";
import AddPropertyForm from "./pages/AddPropertyForm";
import EditProperty from "./pages/EditProperty";
import DeletedProperty from "./pages/DeletedProperty";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property" element={<Property />} />
          <Route path="/addProperty" element={<AddPropertyForm />} />
          <Route path="/editProperty" element={<EditProperty />} />
          <Route path="/deletedProperty" element={<DeletedProperty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
