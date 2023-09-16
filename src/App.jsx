import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark === true ? "containter" : "containter-light"}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
