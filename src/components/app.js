import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import Change from './changedate';
import largeText from './largeText';

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
        Change('Change date', () => this.setState({active: false})),
        largeText('04/03'),
        <label className="grid__remaining">Remaining until your next "birthday"</label>
      ]
    } else {
      return [
        <Picker/>,
        Button('Generate Countdown?', () => this.setState({active: true}))
      ]
     }
  }.bind(this)
  render() {
    //return <div className="grid"><Clock/></div>
    return (
      <div className=/*"grid"*/{`${this.state.active ? 'Changegrid' : 'grid'}`} >
        <h1 className="grid__title">"emit lit' rouy txen noissim" Countdown(?)</h1>
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
