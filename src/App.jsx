import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


//components
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/Home/HomePage";
import About from "./components/About/About";
import Travels from "./components/Travels/Travels";
import Footer from "./components/Footer/Footer";

function App() {
         
  return (
    <Router>
     <Navigation />
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/travels" element={<Travels />} />
     <Route path="/about" element={<About />} />
     </Routes>
     <Footer />
    </Router>
  )
}

export default App
