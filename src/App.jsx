import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shakes from "./pages/Shakes";
import Navbar from "./components/Hookah/Navbar";
import NavbarShakes from "./components/Shakes/Navbar";
import Footer from "./components/Hookah/Footer";
import ShakesFooter from "./components/Shakes/Footer";
import shakeLoader from "./assets/shakeLoader.gif";
import hookahLoader from "./assets/hookahLoader.gif";

// Loader component
const LoaderOverlay = ({ loaderSrc, backgroundColor = "#ffffff" }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      style={{ backgroundColor }}
    >
      <img src={loaderSrc} alt="Loading..." className="w-32 h-32" />
    </div>
  );
};

// Optional wrapper (you can add animation or layout stuff here)
const PageWrapper = ({ children }) => {
  return <>{children}</>;
};

// Component to manage route changes and loader
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [loaderSrc, setLoaderSrc] = useState("");
  const [loaderBg, setLoaderBg] = useState("#ffffff");

  const HOOKAH_LOADER = hookahLoader;
  const SHAKES_LOADER = shakeLoader;

  useEffect(() => {
    // Set loader and background based on route
    if (location.pathname === "/shakes") {
      setLoaderSrc(SHAKES_LOADER);
      setLoaderBg("#fdfbf9");
    } else {
      setLoaderSrc(HOOKAH_LOADER);
      setLoaderBg("#ffffff");
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // You can adjust timing here

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <LoaderOverlay loaderSrc={loaderSrc} backgroundColor={loaderBg} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Navbar />
              <Home />
              <Footer />
            </PageWrapper>
          }
        />
        <Route
          path="/shakes"
          element={
            <PageWrapper>
              <NavbarShakes />
              <Shakes />
              <ShakesFooter />
            </PageWrapper>
          }
        />
        <Route
          path="/hookah"
          element={
            <PageWrapper>
              <Navbar />
              <Home />
              <Footer />
            </PageWrapper>
          }
        />
      </Routes>
    </>
  );
};

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
