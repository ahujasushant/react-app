import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Quiz from './quiz/Quiz';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/quiz/:id" component={Quiz} />
        </div>
      </Router>
    );
  }
}

export default App;
