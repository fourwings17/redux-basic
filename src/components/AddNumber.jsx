import React, { Component } from 'react';


export default class AddNumber extends Component {
  
  state = {size:1}

  render() {
    return (
      <div>
        <h3>Add Number</h3>
        <input type="button" value=" + " onClick={function(e){
          this.props.onClick(this.state.size);
        }.bind(this)} ></input>
        <input type="number" value={this.state.size} onChange={function(e){
          this.setState({size : Number(e.target.value)});
        }.bind(this)}></input>
      </div>
    )
  }
}