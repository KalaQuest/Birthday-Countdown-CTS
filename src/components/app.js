import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock/>,
        Button('Clear Countdown?', () => this.setState({active: false}))
      ]
    } else {
      return Button('Generate Countdown?', () => this.setState({active: true}))
     }
  }.bind(this)
  render() {
    //return <div className="grid"><Clock/></div>
    return (
      <div className="grid">
        <h1 className="grid__title">"Birthday Countdown"?</h1>
        <div className="grid__skewdarkbox"></div>
        <div className="grid__skewdarkonn"></div>
        <div className="grid__skewdarkonnn"></div>
        
        <div className="grid__skewlighton"></div>
        <div className="grid__skewlightonn"></div>
        <div className="grid__skewlightbox"></div>
        <Picker/>
        {this.renderItems() }
        
      </div>
    );
  }
}
