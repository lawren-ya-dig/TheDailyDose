import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Navbar from '../navbar/navbar';
import './createBlog.css'

class createBlog extends Component {
    state = {
        title: '',
        body: ''
    }


    submitBlog = () => {
        const blogObj = {
            title: this.state.title,
            body: this.state.body
        };
        axios.post('/api/dashboard', blogObj)
            .then(({data}) => {
                if(data.success) {
                    console.log('You did it!')
                    this.props.setPost(data.blog);
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
            <div className="blog">
                <Navbar/>
                    <div className="blog-form">
                        <div className="blog-title">
                            <input 
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="blog-body">
                            <input
                                type="text"
                                name="body"
                                value={this.state.body}
                                onChange={this.handleChange}
                            />
                        </div>
                    <button onChange={this.submitBlog}>Submit</button>
                </div>
             </div>
        )
    }
}

export default connect(state => state, Actions)(createBlog);