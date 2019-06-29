import React, { Component } from 'react';
import './register.css';

class register extends Component {
    state = {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    }

    register = () =>{
        const registerObj = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }
        this.props.register(registerObj)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (

            <div className="register-form">
                <div className="register-box">
                    <input className="input-box" type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                </div>
                <div className="register-box">
                    <input className="input-box" type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                </div>
                <div className="register-box">
                    <input className="input-box" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="register-box">
                    <input className="input-box" type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="register-button-box">
                    <button className="register-button" onClick={this.register}>register</button>
                </div>
            </div>
    
        )
    }
}

export default register;
