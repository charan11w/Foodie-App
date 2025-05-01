import React, { useState } from 'react'
import LoginForm from '../Forms/LoginForm';
import noImg from '../../images/nimage.png'

import '../../styles/ShowItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux-slices/CartSlice';


const ShowItem = ({onClose}) => {


  const dispatch=useDispatch()
  const { selectedItem } = useSelector(state => state.cart)
  const [food, setFood] = useState(selectedItem);

  const { name, quantity, price } = food


  const totalAmount = price * quantity;

  const handleQuantity = (Event) => {
    const { name } = Event.target
    name === '+'?
    setFood(food => ({
      ...food,
      quantity:quantity+1
    }))
    :
    setFood(food => ({
      ...food,
      quantity:quantity-1
    }))

  }

  const handleAddToCart=() =>{
    dispatch(addToCart(food))
    onClose()
  }

  return (
    <div className='itemClass'>
      <img src={noImg} className='showImg' />
      <div className='ItemDetails'>
        <div className='ItemName'>{name}</div>
        <p className='extraCharges'>Price is included packing charges</p>
        <div className='priceDetails'>
          <div className='itemPrice'>{price}	&#8377; </div>
          <div className='itemPrice2'>
            <div>Quantity:</div>
            <button className='qButton' name='-' onClick={handleQuantity} disabled={quantity === 1}>-</button>
            <div>{quantity}</div>
            <button className='qButton' name='+' onClick={handleQuantity} disabled={quantity === 10}>+</button>
          </div>
        </div>
        <div className='tAmount'>Total Amount : <span className='totalItemPrice'>{totalAmount}.0 &#8377; </span></div>
        <div className='adCart'>
          <button className='addToCart' onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  )

}

export default ShowItem;