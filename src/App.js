import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Quiz from './quiz/Quiz';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className='App-header'>
          <Dashboard />
        </header>
      </div>

      <Route path="/quiz" component={Quiz} />
      </Router>
    );
  }
}

export default App;
