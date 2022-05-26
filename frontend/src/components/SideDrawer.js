import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


// passing click prop enables close backdrop menu on click of button
const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"]

    if(show) {
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart)
    const{cartItems} = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links">
            <li onClick={click}> {/*onClick toggles the mobile menu */} 
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                <span>
                    cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                </span>
                </Link>
            </li>
            <li onClick={click}> {/*onClick toggles the mobile menu */}
                <Link to="/">
                    Shop
                </Link>
            </li>
        </ul>
    </div>

}

export default SideDrawer
