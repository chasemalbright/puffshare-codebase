import React from 'react'
import "./HomeScreen.css"
import Product from "../components/Product";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts as listProducts } from '../redux/actions/productActions'

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const{products, loading, error} = getProducts

    useEffect(() => {
        dispatch(listProducts())
        console.log(products)
    }, [dispatch])

    return (
        <div className="homescreen">

            <h2 className="title">Latest Products</h2>

            <div className="products">
                {loading ? (
                <h2>Loading...</h2>
                ) : error ? (
                <h2>{error}</h2>
                ) : (
                products.map((product) => (
                    <Product 
                        productId={product._id}
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}

                    />))
                )}

            </div>

        </div>
    )
}

export default HomeScreen
