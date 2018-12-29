import React, { Component } from 'react';
import Instructions from './Instructions';
import StartQuizBtn from './StartQuizBtn';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
        <div className='Dashboard'>
          <header className="App-header">
            <Instructions/>
            <StartQuizBtn/>
          </header>
       </div>
    );
  }
}

export default Dashboard;