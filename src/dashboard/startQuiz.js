import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StartQuiz extends Component {
  render() {
    return (
      <div>
        <button><Link to="/quiz">StartQuiz</Link></button>     
      </div>
    );
  }
}

export default StartQuiz;