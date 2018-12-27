import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Instructions from './instructions';
import StartQuiz from './startQuiz';
import Quiz from '../quiz/Quiz';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
        <Router>
        <div className='Dashboard'>
          <header className="App-header">
            <Instructions/>
            <StartQuiz/>
          </header>
          <Route path="/quiz" component={Quiz} />
       </div>
      </Router>
    );
  }
}

export default Dashboard;