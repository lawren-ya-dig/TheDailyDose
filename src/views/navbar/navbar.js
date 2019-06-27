import React, { Component } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom'
import './navbar.css';

class navbar extends Component {

    // logout = () => {
    //     axios.post('/api/logout')
    //     .then((response)=>{
    //         if(response.data.success){
    //             this.props.history.push('/api/login')
    //         }else{
    //             alert(response.data.err)
    //         }
    //     })
    // }


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
