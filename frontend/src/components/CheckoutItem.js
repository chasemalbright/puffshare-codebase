import './CheckoutItem.css'
import React from 'react'
import {Link} from 'react-router-dom'

const CartItem = ({item}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name}/>
            </div>

            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            
            <p className="cartitem__price price">${item.price}</p>
            
            <p className="cartitem__price">Quantity: {item.qty}</p>

            

        </div>
    )
}

export default CartItem
