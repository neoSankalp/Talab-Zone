import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shakes from "./pages/Shakes";
import Navbar from "./components/Hookah/Navbar";
import NavbarShakes from "./components/Shakes/Navbar";
import Footer from "./components/Hookah/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/shakes"
            element={
              <>
                <NavbarShakes />
                <Shakes />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
