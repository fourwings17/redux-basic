import React, { Component } from 'react';


export default class DisplayNumber extends Component {

  render() {
    return (
      <div>
        <h3>Display Number</h3>       
        <input type="Number" value={this.props.number} readOnly></input>
      </div>
    )
  }
}