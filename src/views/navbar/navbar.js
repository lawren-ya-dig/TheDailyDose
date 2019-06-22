import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';

class navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-link"> <Link to="/dashboard">Home</Link> </div>
                <div className="navbar-link"> <Link to="/createBlog">Blog</Link> </div>
                <div className="navbar-link"> <Link to="/aboutme">About Me</Link> </div>
                <div className="navbar-link"> <Link to="/">Log Out</Link> </div>
            </div>
        )
    }
}

export default navbar;
