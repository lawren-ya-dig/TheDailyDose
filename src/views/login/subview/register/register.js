import React, { Component } from 'react'

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
        const inputs = Object.keys(this.state).map((e,i ) => {
            return <input type="text" key={i} placeholder={e} name={e} value={this.state[e]} onChange={this.handleChange}/>
        })
        return (
            <div>
                {inputs}
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default register;
