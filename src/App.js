import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Connect from "./pages/Connect";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/experience" element={<Experience />} />
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
