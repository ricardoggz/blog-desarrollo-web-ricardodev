import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { Footer } from "../components/Footer/Footer";

import { Sectionjs } from "../pages/Sectionjs/Section";
import { About } from "../pages/About/About";
import { Variables } from "../pages/SectionVariables/Variables";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/sectionjs" component={Sectionjs} exact />
      <Route path="/about" component={About} exact />
      <Route path="/variables" component={Variables} exact />
      <Footer />
    </Router>
  );
}

export default App;
