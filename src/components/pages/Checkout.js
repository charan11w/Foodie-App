import React from 'react';
import '../../styles/Checkout.css';
import { useSelector, useDispatch } from 'react-redux';
import itemImage from '../../images/nimage.png';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, updateCart, selectItem, decrementQty, incrementQty } from '../../redux-slices/CartSlice';

export default function Checkout({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.cart);

  const handlePlaceOrder = () => {
    navigate('/orders');
    onClose();
  };

  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className='checkout-container'>
      <h2 className='checkout-title'>Shopping Cart</h2>
      <div className='cart-list'>
        {cart.map((item) => (
          <div className='cart-card' key={item.id}>
            <div className='card-left'>
              <img src={itemImage} alt='item' className='cart-image' />
              <div className='item-info'>
                <h4>{item.name}</h4>
                <p>₹{item.price}.00</p>
              </div>
            </div>
            <div className='card-right'>
              <div className='quantity-controls'>
                <button onClick={() => dispatch(decrementQty(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
              </div>
              <button className='remove-btn' onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='checkout-footer'>
        <div className='subtotal'>
          <span>Subtotal</span>
          <span>₹{getSubtotal().toFixed(2)}</span>
        </div>
        <button className='place-order-btn' onClick={handlePlaceOrder}>Place Your Order</button>
      </div>
    </div>
  );
}
