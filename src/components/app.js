import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="grid__skewdarkbox"></div>
        <div className="grid__skewdarkonn"></div>
        <div className="grid__skewdarkonnn"></div>
        
        <div className="grid__skewlighton">h1</div>
        <div className="grid__skewlightonn">h1</div>
        <div className="grid__skewlightbox">h1</div>
      </div>
    );
  }
}
