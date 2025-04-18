import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from "./Components/About";
import Faculty from "./Components/Faculty";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import FirstYear from "./Components/FirstYear";

const App = () => {
  return (
   <>
    
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes/first-year" element={<FirstYear />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
   </>
  );
};

export default App;
