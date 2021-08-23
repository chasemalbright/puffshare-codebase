import './Product.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />

            <div className="product__info">
                <p className="info__name">Product 1</p>
                <p className="info__description">
                The investment seeks to provide investment results that, before fees and expenses, correspond generally to the total return performance of the S&P 500 Index. Under normal market conditions
                </p>

                <p className="info__price">$499.99</p>

                <Link to={`/product/${111}`} className="info__button">
                    View
                </Link>

            </div>

            
        </div>
    )
}

export default Product
