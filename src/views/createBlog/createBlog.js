import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Navbar from '../navbar/navbar';
import './createBlog.css'

class createBlog extends Component {
    state = {
        title: '',
        body: '',
    }


    submitBlog = () => {
        const blogObj = {
            title: this.state.title,
            body: this.state.body,
            user_id: this.state.user_id,
        };
        axios.post('/api/dashboard', blogObj)
            .then(({data}) => {
                if(data.success) {
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
                                name="body"
                                value={this.state.body}
                                onChange={this.handleChange}
                            />
                    <button onClick={this.submitBlog} className="submit-button">Submit</button>
                </div>
             </div>
        )
    }
}

export default connect(state => state, Actions)(createBlog);