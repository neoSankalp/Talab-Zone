import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Shakes from "./pages/Shakes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shakes" element={<Shakes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
