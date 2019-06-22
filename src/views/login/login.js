import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';
import Register from './subview/register/register';

class login extends Component {
    state = {
        email: '',
        password: '',
        showRegister: false
    };

    login = () => {
        const loginObj = {
            email: this.state.email,
            password:this.state.password
        };
        axios.post('/api/login', loginObj)
            .then(({data}) => {
                if(data.success) {
                    this.props.setUser(data.user);
                    this.props.history.push('/dashboard')
                } else {
                    alert('Wrong credentials');
                }
            });
    };

    showRegister = () => {
        this.setState({
            showRegister: true
        });
    };
    register = registerObj => {
        axios.post('/api/register', registerObj)
            .then(({ data }) => {
                if(data.success){
                    this.props.setUser(data.user);
                    this.props.hustory.push('/dashboard');
                } else {
                    alert('User already exists, please login');
                }
            });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() {
        const register = this.state.showRegister ? <Register register={this.register} /> : '';
        return (
            <div className="login">
                {register}
                {this.state.showRegister ? (
                    ''
                ) : (
                        <div className="input-box">
                            <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            
                        <div className="input-box">
                            <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                        <div className="login-button-box">
                            <button className="login-button" onClick={this.login}>login</button>
                            <button className="login-button" onClick={this.showRegister}>register</button>
                            </div>
                        </div>
                )}
                
            </div>
        );
    }
}

export default connect(state => state, actions)(login);
