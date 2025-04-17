import React from 'react'
import '../../styles/Checkout.css'
import { useSelector } from 'react-redux'
import itemImage from '../../images/nimage.png'
import { useNavigate } from 'react-router-dom'

export default function Checkout({onClose}) {


  const navigate=useNavigate();
  const {isAuthenticated} =useSelector(state => state.auth)
  console.log(isAuthenticated)

  const handlePlaceOrder=() => {
    navigate('/orders')
    onClose()
  }
  return (
    <div className='main-checkout'>
      <div className='empty-div'>Shopping Cart</div>
      <div className='checkout-div'>
        <div className='checkout-items'>
          <div className='item-details-div'>
            <img src={itemImage} width="80px" className='image-item'/>
            <div className='image-details'>
              <h5 className='item-font'>Chicken Byriyani hot</h5>
              <p className='item-font'>299.00</p>
            </div>
          </div>
          <div className='quantity-div'>
            <div className='increment-q'>+</div>
            <div className='quant'>{0}</div>
            <div className='decrement-q'>-</div>
          </div>
        </div>
        <div className='checkout-items'>
          <div className='item-details-div'>
            <img src={itemImage} width="80px" className='image-item'/>
            <div className='image-details'>
              <h5 className='item-font'>Chicken Byriyani hot</h5>
              <p className='item-font'>299.00</p>
            </div>
          </div>
          <div className='quantity-div'>
            <div className='increment-q'>+</div>
            <div className='quant'>{0}</div>
            <div className='decrement-q'>-</div>
          </div>
        </div>   
        <div className='checkout-items'>
          <div className='item-details-div'>
            <img src={itemImage} width="80px" className='image-item'/>
            <div className='image-details'>
              <h5 className='item-font'>Chicken Byriyani hot</h5>
              <p className='item-font'>299.00</p>
            </div>
          </div>
          <div className='quantity-div'>
            <div className='increment-q'>+</div>
            <div className='quant'>{0}</div>
            <div className='decrement-q'>-</div>
          </div>
        </div>
        <div className='checkout-items'>
          <div className='item-details-div'>
            <img src={itemImage} width="80px" className='image-item'/>
            <div className='image-details'>
              <h5 className='item-font'>Chicken Byriyani hot</h5>
              <p className='item-font'>299.00</p>
            </div>
          </div>
          <div className='quantity-div'>
            <div className='increment-q'>+</div>
            <div className='quant'>{0}</div>
            <div className='decrement-q'>-</div>
          </div>
        </div>  
        <div className='checkout-items'>
          <div className='item-details-div'>
            <img src={itemImage} width="80px" className='image-item'/>
            <div className='image-details'>
              <h5 className='item-font'>Chicken Byriyani hot</h5>
              <p className='item-font'>299.00</p>
            </div>
          </div>
          <div className='quantity-div'>
            <div className='increment-q'>+</div>
            <div className='quant'>{0}</div>
            <div className='decrement-q'>-</div>
          </div>
        </div>
        <div className='checkout-items'>
          <div className='item-details-div'>
            <img src={itemImage} width="80px" className='image-item'/>
            <div className='image-details'>
              <h5 className='item-font'>Chicken Byriyani hot</h5>
              <p className='item-font'>299.00</p>
            </div>
          </div>
          <div className='quantity-div'>
            <div className='increment-q'>+</div>
            <div className='quant'>{0}</div>
            <div className='decrement-q'>-</div>
          </div>
        </div>           
      </div>
      <div className='subTotal'>
        <div>Subtotal</div>
        <div>2657.00</div>
      </div>
      <div className='check' onClick={handlePlaceOrder}>
      <button className='place-order-btn'>place your order</button>
      </div>
    </div>
  )
}
