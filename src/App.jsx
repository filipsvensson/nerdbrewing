import 'normalize.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import './App.css';
import Main from './Main/Main';
import Contact from './Contact/Contact';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default App;
