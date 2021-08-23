import './CartItem.css'
import React from 'react'
import {Link} from 'react-router-dom'

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            </div>

            <Link to={`/product/${111}`} className="cartitem__name">
                <p>Product 1</p>
            </Link>
            
            <p className="cartitem__price">499.99</p>
            
            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button className="cartitem__delete">
                <i className="fas fa-trash"></i>
            </button>

        </div>
    )
}

export default CartItem
