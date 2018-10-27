import React, { Component } from "react";
import axios from "axios";
import './home.css'
class Home extends Component {
  state = {
    persons: [],
  };
  

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }


  render() {
    return (
      <div className="shopping-list">
        <ul className="person-list">
          {this.state.persons.map(person => (<li key={person.id}>{person.name}</li>))}
        </ul>
      </div>
    );
  }
}

export default Home;
