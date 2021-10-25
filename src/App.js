import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./pages/Section";
import { About } from "./pages/About";
import { Card } from "./components/Card";

function App() {
  return (
    <Router>
      <Header />
      <main>
       <Route path="/index.html" exact component={Card}/>
        <Route path="/about" component={About} />
        <Route path="/section" component={Section} />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
