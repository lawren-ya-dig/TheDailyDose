import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Navbar from '../navbar/navbar';
import './createBlog.css'

class createBlog extends Component {
    state = {
        title: '',
        content: '',
    }


    submitBlog = () => {
        const blogObj = {
            title: this.state.title,
            content: this.state.content,
            user_id: this.state.user_id,
        };
        axios.post('/api/dashboard', {blogObj})
            .then((response) => {
                console.log(response.data)
                if(response.data.success) {
                    debugger
                    this.props.setBlog(response.data.blog);
                    this.props.history.push('/createBlog')
                } else {
                    alert('Could not submit post');
                }
            });
    };


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    


    render() {
       
        return (
            <div className="createBlog">
                <Navbar/>
                    <div className="blog-form">
                            <input className="input-title"
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        
                            <input className="input-body"
                                type="text"
                                name="content"
                                value={this.state.content}
                                onChange={this.handleChange}
                            />
                    <button onClick={this.submitBlog} className="submit-button">Submit</button>
                </div>
             </div>
        )
    }
}

export default connect(state => state, Actions)(createBlog);