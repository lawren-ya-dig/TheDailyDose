import React from 'react'
import {Link} from 'react-router-dom';
import './blog.css';


export default function blog(props) {
    return (
        <div>
            {/* <Link to={`/dashboard/${props.id}`}> */}
            <div className="each-blog">
                <h1>{props.title} </h1>
                <p>{props.content}</p>
                {/* <img src={props.image_url} alt="Product Image"/> */}
            </div>
            {/* </Link> */}
        </div>
    )
}