import React from 'react'
import {Link} from 'react-router-dom';


export default function blog(props) {
    return (
        <div>
            <Link to={`/dashboard/${props.id}`}>
                <h1>{props.title} </h1>
                <p>{props.content}</p>
                {/* <img src={props.image_url} alt="Product Image"/> */}
            </Link>
        </div>
    )
}