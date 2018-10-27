import React, { Component } from "react";
import './home.css'
const divStyle = {
 background: '#458bc8',
};
const ulStyle = {
 display: 'inline-block',
};

class Counter extends Component {
  state = {
    tags: ['first', 'second', 'third'],
  };
  render() {
    return (
      <p>Counter</p>
      // <div className="row">
      // <div className="col sm-12">
      //   <h1>Counter</h1>
      //   <ul style={ulStyle} className="person-list">
      //     {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      //   </ul>
      // </div>
      // </div>
    );
  }
}

export default Counter;
