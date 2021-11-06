import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

const Card = (props) => {
    return (
        <Link to={`/products/${props.data.id}`}>
        <div className="product-card">
            <div className="product-image">
                <img src={props.data.image} />
            </div>
            <div className="product-info">
                <h5>{props.data.title}</h5>
                <h6>{props.data.price}</h6>
            </div>
        </div>
        </Link>
    )
}

export default Card;