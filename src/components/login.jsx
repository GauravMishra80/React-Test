import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./counter";
import Home from "./home";
import About from "./about";
import "./login.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  NavLink
} from "react-bootstrap";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
  Form,
  Col
} from "react-bootstrap";
const formClass = {
  width: 400,
  marginLeft: 350
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div style={formClass}>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="md">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="md">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="md"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
