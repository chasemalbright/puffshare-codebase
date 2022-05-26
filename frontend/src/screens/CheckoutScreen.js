import React from 'react'
import "./CheckoutScreen.css"
import CheckoutItem from '../components/CheckoutItem'

// form dependencies
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com'

import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import {addToCart, removeFromCart} from '../redux/actions/cartActions'

const CheckoutScreen = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartSubtotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }

    const summary = () => {
        let summaryText = ''
        cartItems.map(item => (
            summaryText += 'PRODUCT: '+item.name + ', QUANTITY: ' + item.qty + ' || '
        ))
        summaryText += 'Subtotal: ' + getCartSubtotal();

        return summaryText
    }


    //PUT IN .ENV
    const SERVICE_ID = "default_service";
    const TEMPLATE_ID = "template_9k8olyn";
    const USER_ID = "cKx9Ym05mJvBz7im1";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result);
            Swal.fire({
              icon: 'success',
              title: 'Order Placed Successfully!'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
        cartItems.map(item => (
            removeHandler(item.product)
        ))

      };



    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Confirm Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                ) : (
                    cartItems.map(item => (
                    <CheckoutItem key={item.product} item={item} />
                )))}
            </div>

            {/* <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubtotal().toFixed(2)}</p>
                </div>
                

            </div> */}

            <Form onSubmit={handleOnSubmit}>


                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Name...'
                    required
                    icon='user circle'
                    iconPosition='left'
                /> 
                <Form.Field 
                    id='form-input-control-email'
                    control={Input}
                    label='Phone Number'
                    name='user_number'
                    placeholder='Phone Number'
                    required
                    icon='phone'
                    iconPosition='left'
                /> 

                <Form.Field 
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Delivery Instructions'
                    name='user_message'
                    placeholder='Intructions, times, requests...'
                    required
                /> 
                <Form.Field
                    id='summary'
                    control={Input}
                    label='summary'
                    value={summary()}
                    name='summary'
                    readOnly
                />
                <Button type='submit' color='blue' floated='right' size='big'> Place Order </Button>
            
            </Form>

        </div>
    )
}

export default CheckoutScreen
