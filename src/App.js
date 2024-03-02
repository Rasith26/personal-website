import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home.js";
import { About } from "./Components/pages/About.js";
import { Projects } from "./Components/pages/Projects.js";
import { Contact } from "./Components/pages/Contact.js";
import Menu from "./Components/Menu.js";

function App() {
  return (
    <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
