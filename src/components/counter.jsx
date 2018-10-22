import React, { Component } from "react";
const divStyle = {
 background: '#458bc8',
};
const ulStyle = {
 display: 'inline-block',
};

class Counter extends Component {
  state = {
    tags: ['tag1', 'tag2', 'tag3'],
  };
  render() {
    return (
      <div className="row">
      <div className="col sm-12" style={divStyle}>
        <h1>Counter App</h1>
        <button className="btn btn-primary btn-sm">Increase Counter</button>
        <ul style={ulStyle}>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      </div>
    );
  }
}

export default Counter;
