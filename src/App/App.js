import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { Footer } from "../components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
