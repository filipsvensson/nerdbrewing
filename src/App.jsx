import 'normalize.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Contact from './Contact/Contact';

const App = () => (
  <Router>
    <div className="App">
      <Route path="/" exact component={Main} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
