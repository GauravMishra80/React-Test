import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navigation extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/counter">Counter</NavLink>
            </div>
        );
    }
}
 
export default Navigation;