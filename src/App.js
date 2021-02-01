import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
        <Router>
              <div className="App">
             <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </div>
        </Router>
    );
  }
}
export default App;