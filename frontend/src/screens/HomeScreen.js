import React from 'react'
import "./HomeScreen.css"
import Product from "../components/Product";

const HomeScreen = () => {
    return (
        <div className="homescreen">

            <h2 className="title">Latest Products</h2>

            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

        </div>
    )
}

export default HomeScreen
