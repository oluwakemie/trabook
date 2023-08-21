import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Gallery from "./gallery";
import About from "./about";
import Login from "./login";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/picture" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
