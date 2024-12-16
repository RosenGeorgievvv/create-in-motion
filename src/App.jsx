import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


//components
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/Home/HomePage";
function App() {

  return (
    <>
     <Navigation />
     <HomePage />
    </>
  )
}

export default App
