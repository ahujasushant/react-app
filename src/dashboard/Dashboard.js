import React, { Component } from 'react';
import Instructions from './instructions';
import StartQuiz from './startQuiz';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
        <div className='Dashboard'>
          <header className="App-header">
            <Instructions/>
            <StartQuiz/>
          </header>
       </div>
    );
  }
}

export default Dashboard;