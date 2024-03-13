import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home.js";
import { About } from "./Components/pages/About.js";
import { Projects } from "./Components/pages/Projects.js";
import { Contact } from "./Components/pages/Contact.js";
import ScrollToTop from './Components/ScrollToTop.js';
import Menu from "./Components/Menu.js";
import Foot from "./Components/Foot.js";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
