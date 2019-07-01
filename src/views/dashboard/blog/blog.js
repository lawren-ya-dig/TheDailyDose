import React from 'react'
// import {Link} from 'react-router-dom';
import './blog.css';


export default function blog(props) {

    {/* <Link to={`/dashboard/${props.id}`}>
<img src={props.image_url} alt="Product Image"/> */}
    return (
        <div>
            <div className="each-blog">
                <h1 className="blog-title">{props.title} </h1>
                <p className="blog-content">{props.content}</p>
            </div>

        </div>
    )
}

