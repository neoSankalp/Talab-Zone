import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Shakes from "./pages/Shakes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shakes" element={<Shakes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
