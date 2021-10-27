import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./pages/Section";
import { About } from "./pages/About";
import {Variables} from "./pages/Variables";
import { Card } from "./components/Card";

function App() {
  return (
    <Router>
      <Header />
      <main>
       <Route path="/" exact component={Card}/>
        <Route path="/about" component={About} />
        <Route path="/section" component={Section} />
        <Route path="/variables" component={Variables} />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
