import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./counter";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Register from "./register";

const navClass ={
 backgroundColor:'#15d1da',
};
class NavbarComponent extends Component {
    state = {  }

    render() { 
        return ( 
          <Router>
          <div>
            <Navbar style={navClass}>
              <Navbar.Header>
                <Navbar.Brand />
              </Navbar.Header>
              <Nav>
                <NavItem componentClass={Link} href="/" to="/">
                  Home
                </NavItem>
                <NavItem componentClass={Link} href="/about" to="/about">
                  About
                </NavItem>
                <NavItem componentClass={Link} href="/counter" to="/counter">
                  Counter
                </NavItem>
                <NavDropdown
                  className="dropdown-link"
                  title="Profile"
                  id="basic-nav-dropdown"
                  style={{width: 160}}>
                  <MenuItem componentClass={Link} href="/register" to="/register">Register</MenuItem>
                  <MenuItem componentClass={Link} href="/login" to="/login">Login</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/counter" component={Counter} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </Router>
         );
    }
}
 
export default NavbarComponent;


