import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../navbar/navbar';
import Blog from './blog/blog';
import './dashboard.css';


class dashboard extends Component {
    state = {
        blogFeed: []
    }


    componentDidMount(){
        axios.get(`/api/dashboard/`)
        .then(({data})=>{
            if(data.success){
                this.setState({
                   blogFeed: data.blogs
                })
            } else{
                alert('uh oh! The blogs went missing')
            }
        })
    }

    render() {
        const blogs = this.state.blogFeed.map((e, r)=>{
            return <Blog key={e.id} id={e.id} title={e.title} content={e.content} image_url={e.image_url}/>
        })
        
        return (
            <div>
                <Navbar/>
                    <div className="dashboard">
                
                    {blogs}
                    
                    </div>
            </div>
        )
    }
}

export default dashboard;
