import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Gallery from "./gallery";
import About from "./about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/picture" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
