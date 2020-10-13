import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import './App.css';
import { Navigation } from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
