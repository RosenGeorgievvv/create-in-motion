import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


//components
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/Home/HomePage";
import About from "./components/About/About";
function App() {

  return (
    <Router>
     <Navigation />
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/about" element={<About />} />
     </Routes>
     
    </Router>
  )
}

export default App
