import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Page from "./components/Page/Page";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from "./components/Portfolio/Portfolio";


function App() {
 
  return (
    <div>
      <Router>
        <div>
          <Nav />
            <Routes>
              <Route
              path="/"
              element={<About />}
              />
              <Route 
              path="/portfolio"
              element={<Portfolio />}
              />
              <Route 
              path="/contact"
              element={<Portfolio />}
              />
              <Route 
              path="/resume"
              element={<Portfolio />}
              />
            </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
