import React from 'react'
import '../../styles/Checkout.css'
import { useSelector } from 'react-redux'

export default function Checkout() {


  const {isAuthenticated} =useSelector(state => state.auth)
  console.log(isAuthenticated)
  return (
    <div className='main-checkout'>
      <div className='empty-div'>Shopping Cart</div>
      <div className='checkout-div'>Checkout</div>
      <div className='check'>
      <button className='place-order-btn'>place your order</button>
      </div>
    </div>
  )
}
